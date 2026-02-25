// Добавил импорт глобальных стилей
import { GlobalStyles } from "./styles/GlobalStyles"; 
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  )
}

export default App;
