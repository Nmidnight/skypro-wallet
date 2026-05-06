import styled, { createGlobalStyle } from 'styled-components';

export const GlobalBackground = createGlobalStyle`
  body {
    background-color: #F4F5F6;
    margin: 0;
  }
`;

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  max-width: 1160px;
  margin: 0 auto;
  padding-top: 180px;
  position: relative;
`;

export const PageTitle = styled.h1`
  grid-column: span 12;
  position: absolute;
  top: 100px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  margin: 0;
`;

// Гриды для таблицы
const GridRowBase = styled.div`
  display: grid;
  grid-template-columns: 141px 141px 142px 1fr 20px; 
  column-gap: 32px;
  align-items: center;
`;

export const ExpensesCard = styled.div`
  grid-column: span 8; 
  width: 789px;
  height: 618px;
  background: #FFFFFF;
  border-radius: 30px;
  padding: 32px; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ExpensesCard__Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 0 0 32px 0;
`;

export const ExpensesCard__Header = styled(GridRowBase)`
  width: calc(100% + 64px); 
  margin-left: -32px;        
  padding: 0 32px 6px 32px;  
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1); 
  margin-bottom: 18px;
`;

export const ExpensesCard__Th = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #999999;
`;

// Блок строк в таблице)
export const ExpensesList = styled.div`
  overflow-y: auto;
  flex: 1;
`;

export const ExpenseRow = styled(GridRowBase)`
  padding: 7px 0;
`;

export const ExpenseCell = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &.amount {
    font-weight: 600;
  }
`;

export const StateMessage = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #999999;
  padding: 7px 0;

  &.error {
    color: #f25050;
  }
`;

export const DeleteIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  img { width: 12px; height: 12px; }
`;

export const AddExpenseCard = styled.div`
  grid-column: span 4;
  width: 339px;
  height: 618px;
  background: #FFFFFF;
  border-radius: 30px;
  padding: 32px;
  box-sizing: border-box;
`;
