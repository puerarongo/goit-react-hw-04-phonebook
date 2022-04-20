import React, { useState, useEffect} from "react";
import Form from "./form/Form";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";

//? Library
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';


const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])


  //todo Function
  const formSubmitHandler = (name, number) => {
    const nameArr = contacts.map(elem => elem.name)
    if (nameArr.includes(name)) {
      return Report.failure(
        "Failure",
        `${name} is already in contacts!`,
        "Try again"
      );
    };
    setContacts([{ id: nanoid(), name: name, number: number }, ...contacts])
  };


  const filterHandler = e => {
    setFilter(e.currentTarget.value)
  };

  const filtred = contacts.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()) );


  const deleteComponent = id => {
    setContacts(contacts.filter((elem) => elem.id !== id))
  };


  return (
    <div>
      <h1>Phonebook</h1>
      <Form submit={formSubmitHandler}/>

      <h2>Contacts</h2>
      <Filter filter={filter} change={filterHandler}/>
      <ContactList contacts={filtred} deleteById={deleteComponent}/>
    </div>
  )
};

export default App;