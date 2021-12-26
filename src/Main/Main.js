import styles from "./Main.module.scss";
import Button from "../Button/Button";
import PhoneListHeader from "../PhoneListHeader/PhoneListHeader";
import PhoneListBody from "../PhoneListBody/PhoneListBody";
import Modal from "../Modal/Modal";

const Main = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      ime: "Marko",
      prezime: "Markovic",
      email: "markomarkovic@gmail.com",
      brojTelefona: 555333,
    },
    {
      id: 2,
      ime: "Petar",
      prezime: "Petrovic",
      email: "petarpetrovic@gmail.com",
      brojTelefona: 225883,
    },
    {
      id: 3,
      ime: "Zoran",
      prezime: "Zoranovic",
      email: "zoranzoranovic@gmail.com",
      brojTelefona: 333555,
    },
    {
      id: 1,
      ime: "Marko",
      prezime: "Markovic",
      email: "markomarkovic@gmail.com",
      brojTelefona: 555333,
    },
    {
      id: 2,
      ime: "Petar",
      prezime: "Petrovic",
      email: "petarpetrovic@gmail.com",
      brojTelefona: 225883,
    },
    {
      id: 3,
      ime: "Zoran",
      prezime: "Zoranovic",
      email: "zoranzoranovic@gmail.com",
      brojTelefona: 333555,
    },
    {
      id: 1,
      ime: "Marko",
      prezime: "Markovic",
      email: "markomarkovic@gmail.com",
      brojTelefona: 555333,
    },
    {
      id: 2,
      ime: "Petar",
      prezime: "Petrovic",
      email: "petarpetrovic@gmail.com",
      brojTelefona: 225883,
    },
    {
      id: 3,
      ime: "Zoran",
      prezime: "Zoranovic",
      email: "zoranzoranovic@gmail.com",
      brojTelefona: 333555,
    },
    {
      id: 1,
      ime: "Marko",
      prezime: "Markovic",
      email: "markomarkovic@gmail.com",
      brojTelefona: 555333,
    },
    {
      id: 2,
      ime: "Petar",
      prezime: "Petrovic",
      email: "petarpetrovic@gmail.com",
      brojTelefona: 225883,
    },
    {
      id: 3,
      ime: "Zoran",
      prezime: "Zoranovic",
      email: "zoranzoranovic@gmail.com",
      brojTelefona: 333555,
    },
  ];

  return (
    <>
      <div className={styles.main}>
        <h4>Kontakti</h4>
        <Button text={"Dodaj Novi"} />
      </div>
      <div className={styles.container}>
        <div className={styles.phoneListContainer}>
          <PhoneListHeader />
          {DUMMY_DATA.map((contact) => {
            return (
              <PhoneListBody
                key={contact.id}
                ime={contact.ime}
                prezime={contact.prezime}
                email={contact.email}
                brojTelefona={contact.brojTelefona}
              />
            );
          })}
        </div>
        <Modal />
      </div>
    </>
  );
};

export default Main;
