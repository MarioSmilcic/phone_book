import styles from "./Main.module.scss";
import Button from "../Button/Button";

const Main = () => {
  return (
    <div className={styles.main}>
      <h4>Kontakti</h4>
      <Button />
    </div>
  );
};

export default Main;
