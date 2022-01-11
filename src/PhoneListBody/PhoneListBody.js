import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";
import styles from "./PhoneListBody.module.scss";

const PhoneListBody = (props) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.lastName}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>
            <img src={Edit} alt="edit" />
            <img src={Delete} alt="delete" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PhoneListBody;
