import { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import NavModal from "../../Components/Modal/NavModal";
import styles from "./About.module.scss";

const About = () => {
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
      <div className={styles.about}>
        <img src={Hamburger} alt="hamburger" onClick={OpenNavModal} />
        <p>About</p>
      </div>
    </>
  );
};

export default About;
