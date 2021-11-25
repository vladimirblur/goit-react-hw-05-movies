import { NavLink } from "react-router-dom";
import Container from "../Container";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <Container>
      <nav>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Movies
        </NavLink>
      </nav>
    </Container>
  );
}
