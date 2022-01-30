import styles from "./ContactListHeader.module.scss";

const ContactListHeader = () => {
  return (
    <div className={styles.table}>
      <p>Ime</p>
      <p>Prezime</p>
      <p>Email</p>
      <p>Broj Telefona</p>
      <p>Akcija </p>
    </div>
  );
};

export default ContactListHeader;
