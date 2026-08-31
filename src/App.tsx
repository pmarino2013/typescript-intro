import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect } from "react";
import { usuarios } from "./data/usuarios";
import LoginScreen from "./views/LoginScreen";
import AppRouter from "./routes/AppRouter";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(usuarios));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <AppRouter />
            </ProtectedRoutes>
          }
        />

        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
