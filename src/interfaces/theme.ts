
// Usamos un 'type' con unión de literales para limitar los temas válidos [4]
export type Theme = "light" | "dark";

// Usamos una 'interface' para describir la forma del objeto del contexto [4]
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}