import { Routes, Route } from "react-router";
import LayoutScreen from "../layout/LayoutScreen";
import HomeScreen from "../views/HomeScreen";
import AboutScreen from "../views/AboutScreen";
import Error404Screen from "../views/Error404Screen";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutScreen />}>
        <Route index element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="*" element={<Error404Screen />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
