import * as S from "./ExpensesTable.styled";
import { MainPageForm } from "../MainPageForm/MainPageForm";
import {
  categoryLabels,
  formatRubles,
  formatTransactionDate,
} from "../../utils/transactionsFormatters";

export const ExpensesTable = ({
  transactions,
  isLoading,
  error,
  onTransactionCreated,
}) => {
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
          {isLoading && <S.StateMessage>Загружаем расходы...</S.StateMessage>}

          {!isLoading && error && (
            <S.StateMessage className="error">{error}</S.StateMessage>
          )}

          {!isLoading && !error && transactions.length === 0 && (
            <S.StateMessage>Расходов пока нет</S.StateMessage>
          )}

          {!isLoading &&
            !error &&
            transactions.map((item) => (
              <S.ExpenseRow key={item.id || item._id}>
                <S.ExpenseCell>{item.description}</S.ExpenseCell>
                <S.ExpenseCell>
                  {categoryLabels[item.category] || item.category}
                </S.ExpenseCell>
                <S.ExpenseCell>{formatTransactionDate(item.date)}</S.ExpenseCell>
                <S.ExpenseCell className="amount">
                  {formatRubles(item.sum)}
                </S.ExpenseCell>
                <S.DeleteIcon>
                  <img src="/svg/Frame_1511838850.svg" alt="Удалить" />
                </S.DeleteIcon>
              </S.ExpenseRow>
            ))}
        </S.ExpensesList>
      </S.ExpensesCard>

      <MainPageForm onTransactionCreated={onTransactionCreated} />
    </S.PageContainer>
  );
};
