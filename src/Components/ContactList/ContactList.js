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
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.lastName}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>
            <img src={Edit} alt="edit" onClick={EditContactHandler} />
            <img src={Delete} alt="delete" onClick={DeleteContactHandler} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ContactList;
