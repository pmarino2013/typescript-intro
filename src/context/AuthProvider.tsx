import { useState, type ReactNode } from "react";
import type { User } from "../interfaces/auth";
import { AuthContext } from "./AuthContext";
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({ correo: "", password: "" });

  const autentication = (correo: string, password: string) => {
    const usersList: User[] = JSON.parse(localStorage.getItem("users") ?? "[]");

    const validar = usersList.find(
      (item: User) => item.correo === correo && item.password === password,
    );

    if (validar) {
      setUser({ ...validar });
      return { ok: true };
    } else {
      return { ok: false };
    }
  };
  return (
    <AuthContext.Provider value={{ user, autentication }}>
      {children}
    </AuthContext.Provider>
  );
};
