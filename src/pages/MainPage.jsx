import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ExpensesTable } from "../components/ExpensesTable/ExpensesTable";
import { useAuth } from "../context/AuthContext/useAuth";
import { getTransactions } from "../services/TransactionsApi";

const MainWrapper = styled.div`
  Position: relative;
  width: 100%;
  min-height: 100vh;

  `

export function MainPage() {
  const { token } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const refreshTransactions = useCallback(async () => {
    if (!token) {
      setTransactions([]);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const data = await getTransactions(token);
      setTransactions(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Не удалось загрузить расходы");
      setTransactions([]);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    refreshTransactions();
  }, [refreshTransactions]);

  return (
    <MainWrapper>
      <ExpensesTable
        transactions={transactions}
        isLoading={isLoading}
        error={error}
        onTransactionCreated={refreshTransactions}
      />
    </MainWrapper>
  );
}
