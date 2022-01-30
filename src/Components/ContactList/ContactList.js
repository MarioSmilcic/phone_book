import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import styles from "./ContactList.module.scss";

const ContactList = (props) => {
  const { id } = props.contact;
  const contact = props.contact;

  const DeleteContactHandler = () => {
    props.onDelete(id);
  };

  const EditContactHandler = () => {
    props.onEdit(contact);
  };
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <p>Ime</p>
      </div>
      <div className={styles.lastName}>
        <p>Prezime</p>
      </div>
      <div className={styles.email}>
        <p>Email</p>
      </div>
      <div className={styles.phone}>
        <p>Broj Telefona</p>
      </div>
      <div className={styles.action}>
        <p>Akcija </p>
      </div>

      <div className={styles.dName}>
        <p>{props.name}</p>
      </div>
      <div className={styles.dLastName}>
        <p>{props.lastName}</p>
      </div>
      <div className={styles.dEmail}>
        <p>{props.email}</p>
      </div>
      <div className={styles.dPhone}>
        <p>{props.phone}</p>
      </div>
      <div className={styles.dAction}>
        <p>
          <img src={Edit} alt="edit" onClick={EditContactHandler} />
          <img src={Delete} alt="delete" onClick={DeleteContactHandler} />
        </p>
      </div>
    </div>
  );
};

export default ContactList;
