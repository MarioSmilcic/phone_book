import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import styles from "./PhoneList.module.scss";

const PhoneList = (props) => {
  const { id } = props.contact;

  const DeleteContactHandler = () => {
    props.onDelete(id);
  };

  const EditContactHandler = () => {
    props.onEdit(id);
    console.log("Edit mode activated", props.contact);
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

export default PhoneList;
