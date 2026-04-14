import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 379px; /* Ширина всего контейнера по Figma */
  height: 540px;
  background: #FFFFFF;
  border-radius: 30px;
  padding: 32px 0 0 0; /* Top padding 32px по макету */
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
`;

export const CalendarHeader = styled.div`
  padding: 0 32px; /* Left/Right padding по макету */
  margin-bottom: 32px;
`;

export const MonthTitle = styled.h3`
  font-size: 20px;
  font-weight: 700; /* Bold */
  line-height: 150%;
  color: #000000;
  margin: 0;
`;

export const StickyWeekDays = styled.div`
  padding: 0 32px;
  border-bottom: 0.5px solid #999999; /* Та самая линия 0.5px */
  background: #FFFFFF;
  z-index: 10;
`;

export const DaysGridHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px); /* Фиксированная ширина колонок как у ячеек */
  justify-content: space-between; /* Распределяем по ширине 315px */
  margin-bottom: 12px;
`;

export const DayName = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #999999;
  text-align: center;
  text-transform: lowercase;
`;

export const ScrollableDays = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px 32px; /* Отступ сверху после линии */
  
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #D9D9D9; border-radius: 10px; }
`;

export const MonthSection = styled.div`
  margin-bottom: 32px;
`;

export const MonthLabel = styled.div`
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600; /* SemiBold по макету */
  color: #000000;
  margin-bottom: 12px; /* Gap 12px из Figma */
  text-transform: capitalize;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  justify-content: space-between;
  row-gap: 8px; /* Вертикальный зазор между неделями */
`;

export const DayCell = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-size: 14px; /* В Figma числа чуть крупнее названий дней */
  font-weight: 400;
  color: #000000;
  background-color: ${props => props.$isEmpty ? 'transparent' : '#F4F5F6'};
  border-radius: 60px; /* Полный круг */
  cursor: ${props => props.$isEmpty ? 'default' : 'pointer'};
  transition: all 0.2s ease-in-out;
  
  visibility: ${props => props.$isEmpty ? 'hidden' : 'visible'};

  &:hover {
    ${props => !props.$isEmpty && `
      background-color: #F1EBFD;
      color: #7B61FF;
    `}
  }

  /* Если захочешь вернуть выделение для конкретного дня (как на 10 число в макете) */
  ${props => props.$isSelected && `
    background-color: #F1EBFD;
    color: #7B61FF;
    &::after {
      content: '';
      position: absolute;
      bottom: 6px;
      width: 4px;
      height: 4px;
      background-color: #7B61FF;
      border-radius: 50%;
    }
  `}
`;