import { useContext, type ReactNode } from "react";
import type { AuthContextType } from "../interfaces/auth";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

interface RouterProps {
  children: ReactNode;
}
const ProtectedRoutes = ({ children }: RouterProps) => {
  const context = useContext<AuthContextType | null>(AuthContext);
  const user = context?.user;

  if (user?.correo) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
