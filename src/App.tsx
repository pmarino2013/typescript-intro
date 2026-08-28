import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from "./views/HomeScreen";
import AboutScreen from "./views/AboutScreen";
import LayoutScreen from "./layout/LayoutScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutScreen />}>
          <Route index element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
