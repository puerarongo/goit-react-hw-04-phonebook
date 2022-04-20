import React, { Component } from "react";
import Form from "./form/Form";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";

//? Library
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';


class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };


  // ! Life Cycle (added)
  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem("contacts"));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  };
  // ! (added)


  //todo Function

  formSubmitHandler = (name, number) => {
    const nameArr = this.state.contacts.map(elem => elem.name)
    if (nameArr.includes(name)) {
      return Report.failure(
        "Failure",
        `${name} is already in contacts!`,
        "Try again"
      );
    };

    this.setState(prevState => ({
      contacts:
        [{ id: nanoid(), name: name, number: number }, ...prevState.contacts]
    }) );
  };

// !
  filterHandler = (e) => { this.setState({ filter: e.currentTarget.value }) };

// !
  deleteComponent = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter((elem) => elem.id !== id)
    }) );
  };


  
  //todo Render()
  render() {
    const { contacts, filter } = this.state;
    const filtred = contacts.filter(elem => { return elem.name.toLowerCase().includes(filter.toLowerCase()) });
    
    return (
      <div>
        <h1>Phonebook</h1>
        <Form submit={this.formSubmitHandler}/>

        <h2>Contacts</h2>
        <Filter filter={filter} change={this.filterHandler}/>
        <ContactList contacts={filtred} deleteById={this.deleteComponent}/>
      </div>
    )
  };
};

export default App;