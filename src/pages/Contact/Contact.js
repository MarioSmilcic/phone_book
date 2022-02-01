import { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import NavModal from "../../Components/Modals/NavModal";
import styles from "./Contact.module.scss";
import Button from "../../Components/Button/Button";
import MessageModal from "../../Components/Modals/MessageModal";
import Backdrop from "../../Components/Modals/Backdrop";

const Contact = () => {
  const [navModal, setNavModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const OpenNavModal = () => {
    setNavModal(true);
  };

  const CloseNavModal = () => {
    setNavModal(null);
  };

  const MessageModalHandler = () => {
    setMessageModal(true);
    setBackdrop(true);
  };

  const CloseMessageHandler = () => {
    setMessageModal(null);
    setBackdrop(null);
  };

  const NameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const EmailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const MessageHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const message = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    console.log(message);

    MessageModalHandler();

    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  return (
    <>
      {navModal && <NavModal onClose={CloseNavModal} />}
      <div className={styles.container}>
        <div className={styles.contact}>
          <img src={Hamburger} alt="hamburger" onClick={OpenNavModal} />
          <h4>Kontakt Stranica</h4>
        </div>
        <form onSubmit={submitHandler} className={styles.form}>
          <h4>Unesite Vaše podatke</h4>
          <div>
            <input
              type="text"
              placeholder="Ime i prezime"
              onChange={NameHandler}
              value={enteredName}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email adresa"
              onChange={EmailHandler}
              value={enteredEmail}
            />
          </div>
          <div>
            <textarea
              placeholder="Vaša poruka"
              onChange={MessageHandler}
              value={enteredMessage}
            />
          </div>
          <Button text="Pošalji" />
        </form>
      </div>
      {messageModal && <MessageModal onCancel={CloseMessageHandler} />}
      {backdrop && <Backdrop onCancel={CloseMessageHandler} />}
    </>
  );
};

export default Contact;
