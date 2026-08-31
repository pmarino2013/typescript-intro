import { createContext } from "react";
import { AuthContextType } from "../interfaces/auth";

export const AuthContext = createContext<AuthContextType | null>(null);
