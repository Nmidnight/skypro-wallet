import styled from "styled-components";
import { AnalysisTable } from "../components/AnalysisTable/AnalysisTable";
import { Calendar } from "../components/Calendar/Calendar";

const AnalysisPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 120px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  background-color: #f4f5f6;
`;

export const CalendarWrapper = styled.div`
  grid-column: span 4;
`;

export const AnalysisTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: #000;
`;

export const AnalysisTitleContainer = styled.div`
  grid-column: span 12;
  max-height: 48px;
`;

export const TableWrapper = styled.div`
  height: 540px;
  grid-column: span 8;
  background-color: #fff;
  box-shadow: 0 20px 67px -12px rgba(0, 0, 0, 0.13);
  border-radius: 30px;
  padding: 32px;
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

export function AnalysisPage() {
  return (
    <AnalysisPageContainer>
      <AnalysisTitleContainer>
        <AnalysisTitle>Анализ расходов</AnalysisTitle>
      </AnalysisTitleContainer>

      <CalendarWrapper>
        <Calendar />
      </CalendarWrapper>

      <TableWrapper>
        <TableTitle>9 581 ₽</TableTitle>
        <TableText>
          Расходы за <span style={{ fontWeight: 600 }}>10 июля 2024</span>
        </TableText>
        <AnalysisTable />
      </TableWrapper>
    </AnalysisPageContainer>
  );
}