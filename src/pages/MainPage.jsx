import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ExpensesTable } from "../components/ExpensesTable/ExpensesTable";
import { useAuth } from "../context/AuthContext/useAuth";
import { deleteTransaction, getTransactions } from "../services/TransactionsApi";
import { notify } from "../utils/notify";

const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export function MainPage() {
  const { token } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

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

  const handleDeleteTransaction = useCallback(
    async (transactionId) => {
      if (!token || !transactionId) return;
      if (!window.confirm("Удалить этот расход?")) return;

      setDeletingId(transactionId);
      try {
        await deleteTransaction(token, transactionId);
        notify.success("Расход удалён");
        await refreshTransactions();
      } catch (err) {
        notify.error(err.message || "Не удалось удалить расход");
      } finally {
        setDeletingId(null);
      }
    },
    [token, refreshTransactions],
  );

  return (
    <MainWrapper>
      <ExpensesTable
        transactions={transactions}
        isLoading={isLoading}
        error={error}
        deletingId={deletingId}
        onTransactionCreated={refreshTransactions}
        onTransactionDelete={handleDeleteTransaction}
      />
    </MainWrapper>
  );
}
