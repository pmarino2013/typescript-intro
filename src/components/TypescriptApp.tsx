const TypescriptApp = () => {
  const usuario = { nombre: "Pablo" };

  console.log(usuario.apellido);

  const nombre: string = "Ana";

  console.log(nombre);

  const edad: number = 25;
  // edad="pepe"
  console.log(edad);

  //arrays
  const frutas: string[] = ["Manzana", "Banana", "Pera"];

  console.log(frutas);

  const numeros: number[] = [18, 20, 30];
  console.log(numeros);

  //objetos
  const alumnos: {
    nombre: string;
    edad: number;
  } = { nombre: "juan", edad: 34 };

  console.log(alumnos);

  //Funciones (tipar parámetros y resultado de la función)
  function sumar(num1: number, num2: number): number {
    return num1 + num2;
  }
  console.log(sumar(23, 56));

  //arrow function
  const saludar = (nombre: string): string => {
    return `Hola ${nombre}`;
  };

  console.log(saludar);

  //Función que no devuelve nada
  const mostrarMensaje = (): void => {
    console.log("Hola");
  };

  console.log(mostrarMensaje);

  /*
¿Qué es una Interface?
Sirve para describir objetos.
*/
  interface Usuario {
    nombre: string;
    email: string;
    edad: number;
  }

  const user: Usuario = {
    nombre: "Ana",
    email: "ana@mail.com",
    edad: 22,
  };

  console.log(user);

  //type
  type User = {
    nombre: string;
    email: string;
  };

  const persona: User = {
    nombre: "Pepe",
    email: "pepe@example.com",
  };
  console.log(persona);

  //Popiedades opcionales
  interface CardProps {
    titulo: string;
    descripcion?: string; //esta propiedad puede no existir
  }

  // Valores literales (útil en UI)
  type Estado = "pendiente" | "en progreso" | "finalizado"; //solo acepta esos 3 textos

  const proceso: Estado = "finalizado";

  console.log(proceso);

  return <div>TypescriptApp</div>;
};

export default TypescriptApp;
