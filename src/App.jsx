import { GlobalStyles } from "./styles/GlobalStyles";
import { AppRoutes } from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
      <GlobalStyles />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
