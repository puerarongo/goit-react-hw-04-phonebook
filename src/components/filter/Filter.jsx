import React from "react";
import PropTypes from 'prop-types';
import styles from "./Filter.module.css"; 

const Filter = ({ filter, change }) => {
    return (
        <div className={styles.container}>
            <label>Find contacts by name:
                <input className={styles.form__input} type="text" name="filter" value={filter} onChange={change}></input>
            </label>
        </div>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired
};

export default Filter;