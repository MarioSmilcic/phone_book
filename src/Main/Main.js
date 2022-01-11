import { useState } from "react";
import styles from "./Main.module.scss";
import Button from "../Button/Button";
import PhoneListHeader from "../PhoneListHeader/PhoneListHeader";
import PhoneListBody from "../PhoneListBody/PhoneListBody";
import Modal from "../Modal/Modal";

const Main = () => {
  const [modal, setModal] = useState(false);
  const [Contacts, setContacts] = useState([]);

  const OpenModalHandler = () => {
    setModal(true);
  };

  const CloseModalHandler = () => {
    setModal(null);
  };

  const newContact = (enteredContact) => {
    setContacts((prevContacts) => {
      return [enteredContact, ...prevContacts];
    });
  };

  return (
    <>
      <div className={styles.main}>
        <h4>Kontakti</h4>
        <Button text={"Dodaj Novi"} onClick={OpenModalHandler} />
      </div>
      <div className={styles.container}>
        <div className={styles.phoneListContainer}>
          <PhoneListHeader />
          {Contacts.map((contact) => {
            return (
              <PhoneListBody
                key={contact.id}
                name={contact.name}
                lastName={contact.lastName}
                email={contact.email}
                phone={contact.phone}
              />
            );
          })}
        </div>
        {modal && (
          <Modal onClose={CloseModalHandler} onSaveContact={newContact} />
        )}
      </div>
    </>
  );
};

export default Main;
