import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
        <h4>Dashboard</h4>
      </div>
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
    </nav>
  );
};

export default Navbar;
