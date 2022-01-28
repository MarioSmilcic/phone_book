import { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import NavModal from "../../Components/Modal/NavModal";
import styles from "./Contact.module.scss";
import Button from "../../Components/Button/Button";

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
      <div className={styles.container}>
        <div className={styles.contact}>
          <img src={Hamburger} alt="hamburger" onClick={OpenNavModal} />
          <h4>Kontakt stranica</h4>
        </div>
        <form className={styles.form}>
          <h4>Unesite svoje podatke</h4>
          <div>
            <input type="text" placeholder="Ime i prezime" />
          </div>
          <div>
            <input type="email" placeholder="Email adresa" />
          </div>
          <div>
            <textarea placeholder="Vaša poruka" />
          </div>
          <Button text="Pošalji" />
        </form>
      </div>
    </>
  );
};

export default Contact;
