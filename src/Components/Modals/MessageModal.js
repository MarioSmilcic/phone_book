import styles from "./MessageModal.module.scss";
import Card from "../Modals/Card";
import Button from "../Button/Button";

const MessageModal = (props) => {
  return (
    <Card>
      <div className={styles.message}>
        <p>{props.text}</p>
        <Button text="Povratak na stranicu" onClick={props.onCancel} />
      </div>
    </Card>
  );
};

export default MessageModal;
