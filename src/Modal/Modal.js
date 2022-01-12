import { useState } from "react";

import styles from "./Modal.module.scss";
import Exit from "../assets/exit.svg";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";

const Modal = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredLastname, setEnteredLastname] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

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

  const submitHandler = (e) => {
    e.preventDefault();

    const Contact = {
      name: enteredName,
      lastName: enteredLastname,
      email: enteredEmail,
      phone: enteredPhone,
      id: uuidv4(),
    };

    props.onSaveContact(Contact);

    setEnteredName("");
    setEnteredLastname("");
    setEnteredEmail("");
    setEnteredPhone("");
  };

  return (
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

      <Button text={"Dodaj"} />
    </form>
  );
};

export default Modal;
