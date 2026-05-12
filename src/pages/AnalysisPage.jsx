import styled from "styled-components";
import { AnalysisTable } from "../components/AnalysisTable/AnalysisTable";
import { Calendar } from "../components/Calendar/Calendar";
import { useEffect, useState } from "react";
import { getTransactionsByPeriod } from "../services/Api";
import { transformTransactions } from "../utils/transformTransactions";
import { formatRubles } from "../utils/transactionsFormatters";

import { useLocation, useNavigate } from "react-router-dom";

const AnalysisPageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  padding: 0 120px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  background-color: #f4f5f6;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 50px;
    gap: 24px;
  }
  @media (max-width: 460px) {
    padding: 0 16px;
  }
`;

export const CalendarWrapper = styled.div`
  grid-column: span 4;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AnalysisTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #000;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 100%;
  }
`;

export const AnalysisTitleContainer = styled.div`
  grid-column: span 12;
  max-height: 48px;
`;

export const TableWrapper = styled.div`
  min-height: 320px;
  grid-column: span 8;
  background-color: #fff;
  box-shadow: 0 20px 67px -12px rgba(0, 0, 0, 0.13);
  border-radius: 30px;
  padding: 32px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-column: span 12;
    border-radius: 0px;
    padding: 16px;
  }
`;

export const TableTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: #000;
  margin-bottom: 12px;
`;

export const TableText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #999;
`;
export const AnalysisBtnBox = styled.div`
  height: 87px;
  grid-column: span 12;
  width: 100%;
  background: #fff;
  justify-content: center;
  align-items: center;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const AnalysisBtn = styled.button`
  border-radius: 6px;
  padding: 12px;

  height: 39px;
  background: #7334ea;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: #fff;
  border: none;
`;

export function AnalysisPage() {
  const [data, setData] = useState([]);
  const today = new Date();

  const location = useLocation();

  const [period, setPeriod] = useState(
    location.state?.period || {
      start: today,
      end: today,
    },
  );

  useEffect(() => {
    if (!period.start || !period.end) return;

    const load = async () => {
      try {
        const transactions = await getTransactionsByPeriod(
          period.start,
          period.end,
        );

        const chartData = transformTransactions(transactions);
        setData(chartData);
      } catch {
        setData([]);
      }
    };

    load();
  }, [period]);
  const formatDisplayDate = (date) => {
    return new Date(date).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const navigate = useNavigate();

  const periodTotalRub = data.reduce((sum, item) => sum + (item.value || 0), 0);

  return (
    <AnalysisPageContainer>
      <AnalysisTitleContainer>
        <AnalysisTitle>Анализ расходов</AnalysisTitle>
      </AnalysisTitleContainer>

      <CalendarWrapper>
        <Calendar
          setPeriod={setPeriod}
          initialStartDate={today}
          initialEndDate={today}
        />
      </CalendarWrapper>

      <TableWrapper>
        <TableTitle>{formatRubles(periodTotalRub)}</TableTitle>
        <TableText>
          Расходы за{" "}
          <span style={{ fontWeight: 600 }}>
            {formatDisplayDate(period.start)} — {formatDisplayDate(period.end)}
          </span>
        </TableText>
        {data.length > 0 && <AnalysisTable data={data} />}
      </TableWrapper>
      <AnalysisBtnBox>
        <AnalysisBtn onClick={() => navigate("/analysis/calendar")}>
          Выбрать другой период
        </AnalysisBtn>
      </AnalysisBtnBox>
    </AnalysisPageContainer>
  );
}
