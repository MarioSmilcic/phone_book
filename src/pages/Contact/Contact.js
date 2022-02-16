import { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import NavModal from "../../Components/Modals/NavModal";
import styles from "./Contact.module.scss";
import Button from "../../Components/Button/Button";
import MessageModal from "../../Components/Modals/MessageModal";
import Backdrop from "../../Components/Modals/Backdrop";
import emailjs from "emailjs-com";

const Contact = () => {
  const [navModal, setNavModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

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

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_9xf3v9r",
        e.target,
        "user_eqs0VfUiOpZzQx5UKtDAM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    MessageModalHandler();
    e.target.reset();
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
              required
              name="name"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email adresa"
              required
              name="email"
            />
          </div>
          <div>
            <textarea placeholder="Vaša poruka" required name="message" />
          </div>
          <Button text="Pošalji" />
        </form>
      </div>
      {messageModal && (
        <MessageModal
          text="Vaša poruka je poslana"
          onCancel={CloseMessageHandler}
        />
      )}
      {backdrop && <Backdrop onCancel={CloseMessageHandler} />}
    </>
  );
};

export default Contact;
