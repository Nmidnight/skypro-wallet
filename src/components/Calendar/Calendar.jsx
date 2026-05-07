import React, { useState } from "react";
import * as S from "./Calendar.styled";

export function Calendar({ setPeriod, initialStartDate = null, initialEndDate = null }) {
  const daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

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
      name: targetDate.toLocaleString("ru", { month: "long", year: "numeric" }),
      days: getDaysInMonth(targetDate.getMonth(), targetDate.getFullYear()),
      monthIndex: targetDate.getMonth(),
      year: targetDate.getFullYear(),
    });
  }
  const handleSelect = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      setPeriod({ start: date, end: date });
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
        setPeriod({ start: date, end: startDate });
      } else {
        setEndDate(date);
        setPeriod({ start: startDate, end: date });
      }
    }
  };
  const isSelected = (date) =>
    (startDate && date.getTime() === startDate.getTime()) ||
    (endDate && date.getTime() === endDate.getTime());

  const inRange = (date) =>
    startDate &&
    endDate &&
    date.getTime() > startDate.getTime() &&
    date.getTime() < endDate.getTime();

  return (
    <S.CalendarWrapper>
      <S.CalendarHeader>
        <S.MonthTitle>Период</S.MonthTitle>
      </S.CalendarHeader>

      <S.StickyWeekDays>
        <S.DaysGridHeader>
          {daysOfWeek.map((day) => (
            <S.DayName key={day}>{day}</S.DayName>
          ))}
        </S.DaysGridHeader>
      </S.StickyWeekDays>

      <S.ScrollableDays>
        {monthsData.map((month) => (
          <S.MonthSection key={month.name}>
            <S.MonthLabel>{month.name}</S.MonthLabel>
            <S.DaysGrid>
              {month.days.map((item, idx) => {
                if (!item.day) {
                  return (
                    <S.DayCell key={idx} $isEmpty>
                      {null}
                    </S.DayCell>
                  );
                }

                const currentDate = new Date(
                  month.year,
                  month.monthIndex,
                  item.day,
                );

                return (
                  <S.DayCell
                    key={idx}
                    $isEmpty={false}
                    $isSelected={isSelected(currentDate)}
                    $inRange={inRange(currentDate)}
                    onClick={() => handleSelect(currentDate)}
                  >
                    {item.day}
                  </S.DayCell>
                );
              })}
            </S.DaysGrid>
          </S.MonthSection>
        ))}
      </S.ScrollableDays>
    </S.CalendarWrapper>
  );
}
