import { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import Button from "../Button/Button";
import PhoneListHeader from "../PhoneListHeader/PhoneListHeader";
import PhoneListBody from "../PhoneListBody/PhoneListBody";
import Modal from "../Modal/Modal";

const Main = () => {
  const [modal, setModal] = useState(false);
  const [contacts, setContacts] = useState([]);

  const OpenModalHandler = () => {
    setModal(true);
  };

  const CloseModalHandler = () => {
    setModal(null);
  };

  //ADDING NEW CONTACT

  const newContact = (enteredContact) => {
    setContacts((prevContacts) => {
      return [enteredContact, ...prevContacts];
    });
  };

  //DELETING

  const deleteContact = (id) => {
    setContacts([
      ...contacts.filter((contact) => {
        return contact.id !== id;
      }),
    ]);
  };

  //STORING AND GETING FROM LOCAL STORAGE

  useEffect(() => {
    const temp = localStorage.getItem("addContact");
    const loadedContacts = JSON.parse(temp);

    if (loadedContacts) {
      setContacts(loadedContacts);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(contacts);
    localStorage.setItem("addContact", temp);
  }, [contacts]);

  return (
    <>
      <div className={styles.main}>
        <h4>Kontakti</h4>
        <Button text={"Dodaj Novi"} onClick={OpenModalHandler} />
      </div>
      <div className={styles.container}>
        <div className={styles.phoneListContainer}>
          <PhoneListHeader />
          {contacts.map((contact) => {
            return (
              <PhoneListBody
                key={contact.id}
                name={contact.name}
                lastName={contact.lastName}
                email={contact.email}
                phone={contact.phone}
                onDelete={deleteContact}
                contact={contact}
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
