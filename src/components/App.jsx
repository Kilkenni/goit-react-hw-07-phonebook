//import {useState} from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

// const DUMMY_CONTACTS = [
//   {id: 'KindLady', name: 'Athene Margoulis', number: '459-12-56'},
//   {id: 'Nucl3arSnake', name: 'Francis Pritchard', number: '443-89-12'},
//   {id: 'FlyGirl', name: 'Faridah Malik', number: '645-17-79'},
//   {id: 'TyphoonMaster', name: 'Vasili Shevchenko', number: '227-91-26'},
// ];

export const App = () => {



  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',

        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm
        //onSubmit={(newContact) => {addContact(newContact)}}
      />

      <h2>Contacts</h2>

      <Filter
        //value={filter}
        //onChange={onFilterChange}
      />

      <ContactList
        //contacts={contacts}
        //filter={filter}
      />
      <ToastContainer />
    </div>
  );
};
