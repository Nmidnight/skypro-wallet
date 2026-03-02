import { GlobalStyles } from "./styles/GlobalStyles"; 
import { AppRoutes } from "./routes/AppRoutes";
// 1. Импортируем контейнер и базовые стили библиотеки
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
      {/* 2. Добавляем контейнер в конец, чтобы уведомления всплывали поверх всего */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App;