import React from 'react';
import * as S from './Calendar.styled';


export function Calendar() {
  const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  
  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    let firstDayPos = date.getDay() - 1;
    if (firstDayPos === -1) firstDayPos = 6;

    for (let i = 0; i < firstDayPos; i++) days.push({ day: null });

    while (date.getMonth() === month) {
      days.push({ day: date.getDate() });
      date.setDate(date.getDate() + 1);
    }

    return days;
  };

  const monthsData = [];
  const now = new Date();

  for (let i = -12; i <= 24; i++) {
    const targetDate = new Date(now.getFullYear(), now.getMonth() + i, 1);
    monthsData.push({
      name: targetDate.toLocaleString('ru', { month: 'long', year: 'numeric' }),
      days: getDaysInMonth(targetDate.getMonth(), targetDate.getFullYear())
    });
  }

  return (
    <S.CalendarWrapper>
      <S.CalendarHeader>
        <S.MonthTitle>Период</S.MonthTitle>
      </S.CalendarHeader>

      <S.StickyWeekDays>
        <S.DaysGridHeader>
          {daysOfWeek.map(day => (
            <S.DayName key={day}>{day}</S.DayName>
          ))}
        </S.DaysGridHeader>
      </S.StickyWeekDays>

      <S.ScrollableDays>
        {monthsData.map((month) => (
          <S.MonthSection key={month.name}>
            <S.MonthLabel>{month.name}</S.MonthLabel>
            <S.DaysGrid>
              {month.days.map((item, idx) => (
                <S.DayCell key={idx} $isEmpty={!item.day}>
                  {item.day}
                </S.DayCell>
              ))}
            </S.DaysGrid>
          </S.MonthSection>
        ))}
      </S.ScrollableDays>
    </S.CalendarWrapper>
  );
}