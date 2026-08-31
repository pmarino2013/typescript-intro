
// Usamos un 'type' con unión de literales para limitar los temas válidos [4]
export type User = {
    correo:string
    password:string
}

// Usamos una 'interface' para describir la forma del objeto del contexto [4]
export interface AuthContextType {
  user: User;
  autentication: (correo:string, password:string) => void;
}