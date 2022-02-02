import { useState, useEffect } from "react";

import styles from "./Modal.module.scss";
import Exit from "../../assets/exit.svg";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";
import Backdrop from "../Modals/Backdrop";
import MessageModal from "./MessageModal";

const Modal = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredLastname, setEnteredLastname] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const [backdrop, setBackdrop] = useState(false);
  const [message, setMessage] = useState(false);

  const MessageHandler = () => {
    setBackdrop(true);
    setMessage(true);
  };

  const CloseMessageHandler = () => {
    setBackdrop(null);
    setMessage(null);
  };

  const addNameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const addLastnameHandler = (e) => {
    setEnteredLastname(e.target.value);
  };

  const addEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const addPhoneHandler = (e) => {
    setEnteredPhone(e.target.value);
  };

  const contact = props.edit;

  const isEditing = props.isEditing;

  const setIsEditing = props.setIsEditing;

  useEffect(() => {
    if (isEditing) {
      setEnteredName(contact.name);
      setEnteredLastname(contact.lastName);
      setEnteredEmail(contact.email);
      setEnteredPhone(contact.phone);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      enteredName.trim().length === 0 &&
      enteredLastname.trim().length === 0 &&
      enteredEmail.trim().length === 0 &&
      enteredPhone.trim().length === 0
    ) {
      MessageHandler();
    } else if (!isEditing) {
      const Contact = {
        name: enteredName,
        lastName: enteredLastname,
        email: enteredEmail,
        phone: enteredPhone,
        id: uuidv4(),
      };
      props.onSaveContact(Contact);
    } else {
      const updatedContact = {
        name: enteredName,
        lastName: enteredLastname,
        email: enteredEmail,
        phone: enteredPhone,
        id: contact.id,
      };
      props.onUpdateContact(updatedContact);
      setIsEditing(false);
    }

    setEnteredName("");
    setEnteredLastname("");
    setEnteredEmail("");
    setEnteredPhone("");
  };

  return (
    <>
      <form onSubmit={submitHandler} className={styles.modal}>
        <div className={styles.modalHeader}>
          <h4>Dodaj novi zapis</h4>
          <img onClick={props.onClose} src={Exit} alt="exit" />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Ime"
            onChange={addNameHandler}
            value={enteredName}
          />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Prezime"
            onChange={addLastnameHandler}
            value={enteredLastname}
          />
        </div>
        <div className={styles.input}>
          <input
            type="email"
            placeholder="Email"
            onChange={addEmailHandler}
            value={enteredEmail}
          />
        </div>
        <div className={styles.input}>
          <input
            type="tel"
            placeholder="Broj telefona"
            onChange={addPhoneHandler}
            value={enteredPhone}
          />
        </div>

        <Button text={!isEditing ? "Dodaj" : "Promijeni"} />
      </form>
      {backdrop && <Backdrop onCancel={CloseMessageHandler} />}
      {message && (
        <MessageModal
          text="Kontakt ne može biti prazan"
          onCancel={CloseMessageHandler}
        />
      )}
    </>
  );
};

export default Modal;
