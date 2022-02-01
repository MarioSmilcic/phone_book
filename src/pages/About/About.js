import { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import NavModal from "../../Components/Modals/NavModal";
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
            Dobrodošli na stranicu “Telefonski imenik”. Klikom na dugme “Dodaj
            Novi” otvoriće se prozor u koji možete unjeti telefonske kontakte.
            Klikom na dugme “Dodaj” podaci će biti sačuvani i vidljivi u tabeli
            "Kontakti“. Pored kontakta, nalaze se ikone "Edit“ i "Delete“.
            Klikom na "Edit" otvoriće se prozor u kojem kontakte možete
            promijeniti. Klikom na "Delete" pojaviće se zatamljena pozadina i
            prozor za potvrdu brisanja kontakta. Prozor se zatvara klikom na
            pozadinu ili dugme "Ne", a ukoliko kliknete "Da" kontakt će biti
            obrisan. Na stranici "Kontakt" nalazi se kontakt forma. Klikom na
            dugme "Pošalji" pojaviće se poruka kojom se potvrđuje slanje, a u
            konzoli se može vidjeti novi objekat.
          </p>
          <p>
            Aplikacija je rađena u programskom jeziku JavaScript i biblioteci
            React. Za promjenu stranica korištena je biblioteka React Router.
            Svi podaci se čuvaju u locale storageu. Kroz sav rad korišteni su
            Git/GitHub alati.
          </p>
          <p>
            Za styling su korišteni SASS (SCSS) i CSS Modules. Aplikacija je
            responzivna, a dominantni koncepti su "Flex" i "Grids". Upotrebljeni
            su osnovni principi SASS-a, kao što su:
          </p>
          <ul>
            <li>Nested Rules</li>
            <li>Nested Properties</li>
            <li>Variables</li>
            <li>Partials</li>
            <li>Inheritance</li>
            <li>Mixins</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
