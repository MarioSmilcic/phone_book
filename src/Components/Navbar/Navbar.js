import styles from "./Navbar.module.scss";
import Logo from "../../assets/logo.svg";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
        <h4>Dashboard</h4>
      </div>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
