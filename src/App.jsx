// Добавил импорт глобальных стилей
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
