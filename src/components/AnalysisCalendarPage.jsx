import styled from "styled-components";
import { Calendar } from "../components/Calendar/Calendar";
import { useState } from "react";
import ArrowLeft from "../assets/arrow-left.svg?react";
import { AnalysisBtn } from "../pages/AnalysisPage";
import { useLocation, useNavigate } from "react-router-dom";

const CalendarPageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background-color: #f4f5f6;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const TitleBack = styled.div`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  border: none;

  background: transparent;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #999;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #000;
  margin-bottom: 24px;
`;

const CalendarContainer = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 30px;
  padding: 24px 16px;
  display: flex;
  justify-content: center;
`;
const AnalysisBtnBox = styled.div`
  height: 87px;
  width: 100%;
  background: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export function AnalysisCalendarPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const today = new Date();

  const [period, setPeriod] = useState(
    location.state?.period || {
      start: today,
      end: today,
    },
  );

  return (
    <CalendarPageContainer>
      <TitleBack>
        <BackButton onClick={() => navigate("/analysis")}>
          <ArrowLeft />
          Анализ расходов
        </BackButton>
      </TitleBack>

      <Title>Выбор периода</Title>

      <CalendarContainer>
        <Calendar
          setPeriod={setPeriod}
          initialStartDate={today}
          initialEndDate={today}
        />
      </CalendarContainer>
      <AnalysisBtnBox>
        <AnalysisBtn
          onClick={() =>
            navigate("/analysis", {
              state: { period },
            })
          }
        >
          Выбрать период
        </AnalysisBtn>
      </AnalysisBtnBox>
    </CalendarPageContainer>
  );
}
