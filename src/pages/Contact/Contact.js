/* const Contact = () => {
  return (
    <div>
      <p>Contact</p>
    </div>
  );
};

export default Contact; */

import { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import NavModal from "../../Components/Modal/NavModal";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [navModal, setNavModal] = useState(false);

  const OpenNavModal = () => {
    setNavModal(true);
  };

  const CloseNavModal = () => {
    setNavModal(null);
  };

  return (
    <>
      {navModal && <NavModal onClose={CloseNavModal} />}
      <div className={styles.contact}>
        <img src={Hamburger} alt="hamburger" onClick={OpenNavModal} />
        <p>Contact</p>
      </div>
    </>
  );
};

export default Contact;
