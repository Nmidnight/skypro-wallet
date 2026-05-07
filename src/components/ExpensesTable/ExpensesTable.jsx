import React, { useCallback, useEffect, useState } from "react";
import * as S from "./ExpensesTable.styled";
import { MainPageForm } from "../MainPageForm/MainPageForm";
import { createTransaction, getTransactions } from "../../services/TransactionsApi";
import { useAuth } from "../../context/AuthContext/useAuth";
import { notify } from "../../utils/notify";

const categoryMap = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жилье",
  joy: "Развлечения",
  education: "Образование",
  others: "Другое",
};

const formatAmount = (sum) =>
  `${Number(sum || 0).toLocaleString("ru-RU")} ₽`;

const formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value || "-";
  return date.toLocaleDateString("ru-RU");
};

const normalizeTransactions = (response) => {
  const list = Array.isArray(response)
    ? response
    : response?.transactions || response?.data || [];

  if (!Array.isArray(list)) {
    return [];
  }

  return list.map((item, idx) => ({
    id: item.id || item._id || `${item.comment || "transaction"}-${idx}`,
    name: item.comment || item.name || "Без описания",
    category: categoryMap[item.category] || item.category || "Другое",
    date: formatDate(item.date || item.createdAt),
    amount: formatAmount(item.sum),
  }));
};

export const ExpensesTable = () => {
  const { token } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadTransactions = useCallback(async () => {
    if (!token) return;

    setIsLoading(true);
    try {
      const response = await getTransactions(token);
      setExpenses(normalizeTransactions(response));
    } catch (error) {
      notify.error(error?.message || "Не удалось загрузить транзакции");
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  const handleCreateTransaction = async (payload) => {
    if (!token) return;
    setIsSubmitting(true);

    try {
      await createTransaction(token, payload);
      notify.success("Расход добавлен");
      await loadTransactions();
    } catch (error) {
      notify.error(error?.message || "Не удалось добавить расход");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.PageContainer>
      <S.GlobalBackground />
      <S.PageTitle>Мои расходы</S.PageTitle>

      <S.ExpensesCard>
        <S.ExpensesCard__Title>Таблица расходов</S.ExpensesCard__Title>

        <S.ExpensesCard__Header>
          <S.ExpensesCard__Th>Описание</S.ExpensesCard__Th>
          <S.ExpensesCard__Th>Категория</S.ExpensesCard__Th>
          <S.ExpensesCard__Th>Дата</S.ExpensesCard__Th>
          <S.ExpensesCard__Th>Сумма</S.ExpensesCard__Th>
          <div></div> {/* Пустая ячейка над иконками */}
        </S.ExpensesCard__Header>

        <S.ExpensesList>
          {isLoading ? (
            <S.ExpenseCell>Загрузка...</S.ExpenseCell>
          ) : (
            expenses.map((item) => (
              <S.ExpenseRow key={item.id}>
                <S.ExpenseCell>{item.name}</S.ExpenseCell>
                <S.ExpenseCell>{item.category}</S.ExpenseCell>
                <S.ExpenseCell>{item.date}</S.ExpenseCell>
                <S.ExpenseCell className="amount">{item.amount}</S.ExpenseCell>
                <S.DeleteIcon>
                  <img src="/svg/Frame_1511838850.svg" alt="Удалить" />
                </S.DeleteIcon>
              </S.ExpenseRow>
            ))
          )}
        </S.ExpensesList>
      </S.ExpensesCard>

      <MainPageForm
        onAddTransaction={handleCreateTransaction}
        isSubmitting={isSubmitting}
      />

    </S.PageContainer>
  );
};