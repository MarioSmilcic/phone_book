import styles from "./Modal.module.scss";
import Exit from "../assets/exit.svg";
import Button from "../Button/Button";

const Modal = () => {
  const input = [
    { id: 1, type: "text", placeholder: "Ime" },
    { id: 2, type: "text", placeholder: "Prezime" },
    { id: 3, type: "email", placeholder: "Email" },
    { id: 4, type: "tel", placeholder: "Broj telefona" },
  ];

  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <h4>Dodaj novi zapis</h4>
        <img src={Exit} alt="exit" />
      </div>
      {input.map((el) => {
        return (
          <div className={styles.input}>
            <input id={el.id} type={el.type} placeholder={el.placeholder} />
          </div>
        );
      })}
      <Button text={"Dodaj"} />
    </div>
  );
};

export default Modal;
