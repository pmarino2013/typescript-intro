# Lista de shopping

Aplicación web desarrollada como práctica introductoria de React con TypeScript. Permite crear y administrar una lista de productos para una compra.

## Funcionalidades

- Agregar productos mediante un formulario.
- Validar que el nombre del producto no esté vacío.
- Mostrar la cantidad de productos pendientes.
- Marcar productos como completados mediante un checkbox.
- Eliminar productos de la lista.
- Mantener los datos tipados mediante una interfaz `Product`.

> La lista se almacena únicamente en el estado de React. Los productos se pierden al recargar la página.

## Tecnologías

- [React 19](https://react.dev/) para construir la interfaz.
- [TypeScript](https://www.typescriptlang.org/) para el tipado estático.
- [Vite](https://vite.dev/) como servidor de desarrollo y herramienta de build.
- [Tailwind CSS 4](https://tailwindcss.com/) para los estilos de la interfaz.
- [React Hook Form](https://react-hook-form.com/) para gestionar y validar el formulario.
- ESLint para analizar la calidad del código.
- pnpm para administrar las dependencias.

## Requisitos

- Node.js 20 o superior.
- pnpm instalado globalmente.

Para instalar pnpm, se puede utilizar:

```bash
npm install -g pnpm
```

## Instalación

1. Clonar el repositorio y acceder a la carpeta del proyecto.
2. Instalar las dependencias:

```bash
pnpm install
```

## Uso

Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

Luego abrir [http://localhost:8080](http://localhost:8080) en el navegador.

## Scripts disponibles

| Comando        | Descripción                                                            |
| -------------- | ---------------------------------------------------------------------- |
| `pnpm dev`     | Inicia Vite en modo desarrollo en el puerto `8080`.                    |
| `pnpm build`   | Ejecuta la comprobación de TypeScript y genera la build de producción. |
| `pnpm lint`    | Analiza el código con ESLint.                                          |
| `pnpm preview` | Sirve localmente la build de producción.                               |

## Estructura principal

```text
src/
├── components/
│   ├── CardShop.tsx   # Tarjeta de cada producto
│   └── FormShop.tsx   # Formulario para agregar productos
├── interfaces/
│   └── products.ts    # Interfaz Product
├── App.tsx            # Estado y lógica principal de la lista
├── App.css
├── index.css
└── main.tsx           # Punto de entrada de React
```
