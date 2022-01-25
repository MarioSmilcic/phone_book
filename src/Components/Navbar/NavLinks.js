import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const links = [
  {
    id: 1,
    path: "/",
    text: "Početna",
  },
  {
    id: 2,
    path: "/about",
    text: "O Nama",
  },
  {
    id: 3,
    path: "/contact",
    text: "Kontakt",
  },
];

const NavLinks = () => {
  return (
    <div className={styles.links}>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName={styles.active} exact>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
