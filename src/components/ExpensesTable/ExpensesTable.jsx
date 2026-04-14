import React from 'react';
import * as S from './ExpensesTable.styled';
import { MainPageForm } from '../MainPageForm/MainPageForm';

const mockExpenses = [
  { id: 1, name: 'Пятерочка', category: 'Еда', date: '03.07.2024', amount: '3 500 ₽' },
  { id: 2, name: 'Яндекс Такси', category: 'Транспорт', date: '03.07.2024', amount: '730 ₽' },
  { id: 3, name: 'Аптека Вита', category: 'Другое', date: '03.07.2024', amount: '1 200 ₽' },
  { id: 4, name: 'Бургер Кинг', category: 'Еда', date: '03.07.2024', amount: '950 ₽' },
  { id: 5, name: 'Деливери', category: 'Еда', date: '02.07.2024', amount: '1 320 ₽' },
  { id: 6, name: 'Кофейня №1', category: 'Еда', date: '02.07.2024', amount: '400 ₽' },
  { id: 7, name: 'Бильярд', category: 'Развлечения', date: '29.06.2024', amount: '600 ₽' },
  { id: 8, name: 'Перекресток', category: 'Еда', date: '29.06.2024', amount: '2 360 ₽' },
  { id: 9, name: 'Лукойл', category: 'Транспорт', date: '29.06.2024', amount: '1 000 ₽' },
  { id: 10, name: 'Летуаль', category: 'Другое', date: '29.06.2024', amount: '4 300 ₽' },
  { id: 11, name: 'Яндекс Такси', category: 'Транспорт', date: '28.06.2024', amount: '320 ₽' },
  { id: 12, name: 'Перекресток', category: 'Еда', date: '28.06.2024', amount: '1 360 ₽' },
  { id: 13, name: 'Деливери', category: 'Еда', date: '28.06.2024', amount: '2 320 ₽' },
  { id: 14, name: 'Вкусвилл', category: 'Еда', date: '27.06.2024', amount: '1 220 ₽' },
  { id: 15, name: 'Кофейня №1', category: 'Еда', date: '27.06.2024', amount: '920 ₽' },
  { id: 16, name: 'Вкусвилл', category: 'Еда', date: '26.06.2024', amount: '840 ₽' },
  { id: 17, name: 'Кофейня №1', category: 'Еда', date: '26.06.2024', amount: '920 ₽' },
];

export const ExpensesTable = () => {
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
          {mockExpenses.map((item) => (
            <S.ExpenseRow key={item.id}>
              <S.ExpenseCell>{item.name}</S.ExpenseCell>
              <S.ExpenseCell>{item.category}</S.ExpenseCell>
              <S.ExpenseCell>{item.date}</S.ExpenseCell>
              <S.ExpenseCell className="amount">{item.amount}</S.ExpenseCell>
              <S.DeleteIcon>
                <img src="/svg/Frame_1511838850.svg" alt="Удалить" />
              </S.DeleteIcon>
            </S.ExpenseRow>
          ))}
        </S.ExpensesList>
      </S.ExpensesCard>

      <MainPageForm />

    </S.PageContainer>
  );
};