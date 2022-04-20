import React from "react";
import styles from "./ContactList.module.css"; 

const ContactList = ({contacts, deleteById}) => {
    return (
        <div className={styles.container}>
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return <li key={id} className={styles.contact}>
                        <span>{name}: {number}</span>
                        <button className={styles.button__delete} type="button" onClick={() => deleteById(id)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default ContactList;