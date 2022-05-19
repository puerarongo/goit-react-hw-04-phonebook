import React from "react";
import PropTypes from 'prop-types';
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

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ).isRequired,
    deleteById: PropTypes.func.isRequired
};

export default ContactList;