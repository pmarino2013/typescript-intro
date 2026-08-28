import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
// import TypescriptApp from "./components/TypescriptApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* <TypescriptApp /> */}
  </StrictMode>,
);
