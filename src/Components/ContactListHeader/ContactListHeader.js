import styles from "./ContactListHeader.module.scss";

const ContactListHeader = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Email</th>
          <th>Broj Telefona</th>
          <th>Akcija </th>
        </tr>
      </thead>
    </table>
  );
};

export default ContactListHeader;
