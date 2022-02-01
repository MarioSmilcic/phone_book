import { useState } from "react";

import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import styles from "./ContactList.module.scss";
import Backdrop from "../Modals/Backdrop";
import DeleteModal from "../Modals/DeleteModal";

const ContactList = (props) => {
  const [backdrop, setBackdrop] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const { id } = props.contact;
  const contact = props.contact;

  const DeleteModalHandler = () => {
    setBackdrop(true);
    setDeleteModal(true);
  };

  const CancelModalHandler = () => {
    setBackdrop(null);
    setDeleteModal(null);
  };

  const DeleteContactHandler = () => {
    props.onDelete(id);
  };

  const EditContactHandler = () => {
    props.onEdit(contact);
  };

  return (
    <>
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
            <img src={Delete} alt="delete" onClick={DeleteModalHandler} />
          </p>
        </div>
      </div>
      {deleteModal && (
        <DeleteModal
          onCancel={CancelModalHandler}
          onDelete={DeleteContactHandler}
        />
      )}
      {backdrop && <Backdrop onCancel={CancelModalHandler} />}
    </>
  );
};

export default ContactList;
