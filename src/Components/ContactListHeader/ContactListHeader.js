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

/*  OLD
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

*/
