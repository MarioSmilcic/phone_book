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
        <div className={styles.header}>
          <img src={Hamburger} alt="hamburger" onClick={OpenNavModal} />
          <h4>O nama</h4>
        </div>
        <div>
          <p>
            Dobrodosli na stranicu “Telefonski imenik”. Klikom da dugme “Dodaj
            Novi” otvoriće se prozor u koji možete unjeti telefonske kontakte.
            Klikom da dugme “Dodaj” podaci će biti sačuvani i vidljivi u tabeli
            "Kontakti“. Pored kontakta, nalaze se ikone "Edit“ i "Delete“, kojim
            možete mijenjati ili brisati Vaše podatke.
          </p>
          <p>
            Aplikacija je rađena u programskom jeziku JavaScript i biblioteci
            React. Za promjenu stranica korištena je biblioteka React Router.
            Svi podaci se čuvaju u locale storageu. Za styling je korišten SASS
            (SCSS).
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
