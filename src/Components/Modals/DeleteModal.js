import styles from "./DeleteModal.module.scss";
import Button from "../Button/Button";
import Card from "../Modals/Card";

const DeleteModal = (props) => {
  return (
    <Card>
      <div className={styles.container}>
        <p>Da li ste sigurni da želite obrisati kontakt?</p>
        <Button text="Ne" onClick={props.onCancel} />
        <Button text="Da" onClick={props.onDelete} />
      </div>
    </Card>
  );
};

export default DeleteModal;
