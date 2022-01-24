import { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import Button from "../Button/Button";
import ContactListHeader from "../ContactListHeader/ContactListHeader";
import ContactList from "../ContactList/ContactList";
import Modal from "../Modal/Modal";

const Main = () => {
  const [modal, setModal] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState();

  //MODAL OPEN & CLOSE

  const OpenModalHandler = () => {
    setModal(true);
  };

  const CloseModalHandler = () => {
    setModal(null);
    setIsEditing(null);
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

  //EDIT

  const startEditingHandler = (contact) => {
    setIsEditing(true);
    setEdit(contact);
  };

  const updatedContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) => {
        contact.id === updatedContact.id && (contact = updatedContact);
        return contact;
      })
    );
  };

  //STORING AND GETING CONTACTS FROM LOCAL STORAGE

  useEffect(() => {
    const temp = localStorage.getItem("addContact");
    const loadedContacts = JSON.parse(temp);

    loadedContacts && setContacts(loadedContacts);
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(contacts);
    localStorage.setItem("addContact", temp);
  }, [contacts]);

  return (
    <div
      className={`${
        styles.main
      } {(${!modal} || ${!isEditing}) && styles.notModal}`}
    >
      <div className={styles.kontakti}>
        <h4>Kontakti</h4>
        <Button text={"Dodaj Novi"} onClick={OpenModalHandler} />
      </div>
      <div className={styles.contactListContainer}>
        <ContactListHeader />
        {contacts.map((contact) => {
          return (
            <ContactList
              key={contact.id}
              name={contact.name}
              lastName={contact.lastName}
              email={contact.email}
              phone={contact.phone}
              contact={contact}
              onDelete={deleteContact}
              onEdit={startEditingHandler}
            />
          );
        })}
      </div>
      <div className={styles.modal}>
        {(modal || isEditing) && (
          <Modal
            onClose={CloseModalHandler}
            onSaveContact={newContact}
            edit={edit}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onUpdateContact={updatedContact}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
