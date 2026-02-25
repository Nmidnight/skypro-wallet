import React from 'react';
import { ExpensesTable } from '../components/ExpensesTable/ExpensesTable';

export function MainPage() {
  return (
    <main style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <ExpensesTable />
      {/* НОВЫЙ РАСХОД БУДЕТ ЗДЕСЬ" */}
    </main>
  );
}
