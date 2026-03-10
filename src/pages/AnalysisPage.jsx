import React from 'react';
import styled from 'styled-components';
import { Calendar } from '../components/Calendar/Calendar';

const PageContainer = styled.div`
  padding: 40px 120px;
  background-color: #F5F5F7;
  min-height: calc(100vh - 80px);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #000;
  font-family: 'Montserrat', sans-serif;
`;

const ContentGrid = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

const ChartsPlaceholder = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 30px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  border: 1px dashed #ccc;
`;

export function AnalysisPage() {
  return (
    <PageContainer>
      <Title>Анализ расходов</Title>
      <ContentGrid>
        {/* Контейнер календаря */}
        <div style={{ width: '379px' }}>
          <Calendar />
        </div>
        
        {/* Контейнер для графиков */}
        <ChartsPlaceholder>
          <p>Контейнер для графиков</p>
        </ChartsPlaceholder>
      </ContentGrid>
    </PageContainer>
  );
}