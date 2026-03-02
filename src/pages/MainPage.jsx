import React from 'react';
import { ExpensesTable } from '../components/ExpensesTable/ExpensesTable';
import { MainPageForm } from '../components/MainPageForm/MainPageForm';
import styled from 'styled-components';

const MainWrapper = styled.div`
  Position: relative;
  width: 100%;
  min-height: 100vh;

  `

export function MainPage() {
  return (
    <MainWrapper>
      <ExpensesTable />
    </MainWrapper>
  );
}
