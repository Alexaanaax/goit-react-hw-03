import css from "./Contact.module.css";
import { RiAccountPinCircleFill } from "react-icons/ri";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.contact}>
    <RiAccountPinCircleFill className={css.icon}  />
      <p className={css.contactName}>{name}</p>
      <p className={css.contactNumber}>{number}</p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;