import { NavLink } from "react-router";
import ButtonTheme from "./ButtonTheme";

const NavBarShop = () => {
  return (
    <nav className="flex justify-end items-center">
      <ul className="flex gap-4">
        <li>
          <NavLink to="/">Lista</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre nosotros</NavLink>
        </li>
        <li>
          <ButtonTheme />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarShop;
