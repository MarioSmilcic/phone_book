import styles from "./DeleteModal.module.scss";
import Button from "../Button/Button";

const DeleteModal = (props) => {
  return (
    <div className={styles.deleteModal}>
      <div>
        <p>Da li ste sigurni da želite obrisati kontakt?</p>
      </div>
      <div className={styles.button}>
        <Button text="Ne" onClick={props.onCancel} />
        <Button text="Da" onClick={props.onDelete} />
      </div>
    </div>
  );
};

export default DeleteModal;
