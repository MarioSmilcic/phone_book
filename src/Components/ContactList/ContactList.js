import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import styles from "./ContactList.module.scss";
// import ContactListHeader from "../ContactListHeader/ContactListHeader";

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

/* 
return (
    <div className={styles.container}>
      // <div className={styles.contactListHeader}>
      //   <ContactListHeader />
      </div> 
      <div>
        <thead>
          <tr>
            <th className={styles.name}>Ime</th>
            <th className={styles.lastName}>Prezime</th>
            <th className={styles.email}>Email</th>
            <th className={styles.phone}>Broj Telefona</th>
            <th className={styles.action}>Akcija </th>
          </tr>
        </thead>
      </div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.dName}>{props.name}</td>
            <td className={styles.dLastName}>{props.lastName}</td>
            <td className={styles.dEmail}>{props.email}</td>
            <td className={styles.dPhone}>{props.phone}</td>
            <td className={styles.dAction}>
              <img src={Edit} alt="edit" onClick={EditContactHandler} />
              <img src={Delete} alt="delete" onClick={DeleteContactHandler} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;

*/

/* ORIGINAL

return (
    <div className={styles.container}>
      <div className={styles.contactListHeader}>
        <ContactListHeader />
      </div>

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
    </div>
  );
};

export default ContactList;

*/

/* TABLE CIK-CAK

return (
    <div className={styles.container}>
     
     
      <div className={styles.name}>
        <th>Ime</th>
      </div>
      <div className={styles.lastName}>
        <th>Prezime</th>
      </div>
      <div className={styles.email}>
        <th>Email</th>
      </div>
      <div className={styles.phone}>
        <th>Broj Telefona</th>
      </div>
      <div className={styles.action}>
        <th>Akcija </th>
      </div>
      
      <div className={styles.dName}>
        <td>{props.name}</td>
      </div>
      <div className={styles.dLastName}>
        <td>{props.lastName}</td>
      </div>
      <div className={styles.dEmail}>
        <td>{props.email}</td>
      </div>
      <div className={styles.dPhone}>
        <td>{props.phone}</td>
      </div>
      <div className={styles.dAction}>
        <td>
          <img src={Edit} alt="edit" onClick={EditContactHandler} />
          <img src={Delete} alt="delete" onClick={DeleteContactHandler} />
        </td>
      </div>
      
    </div>
  );
};

export default ContactList;
*/
