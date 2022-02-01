import styles from "./NavModal.module.scss";
import Close from "../../assets/exit.svg";
import NavLinks from "../Navbar/NavLinks";

const NavModal = (props) => {
  return (
    <div className={styles.navModal}>
      <img src={Close} alt="close" onClick={props.onClose} />
      <NavLinks />
    </div>
  );
};

export default NavModal;
