import { /*createAction, createReducer,*/ createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

import { fetchContacts } from "js/mockAPI";

/*export const addContact = createAction("contacts/addContact", function prepare(contact) {
  return { payload: { id: nanoid(), ...contact }};
} ); //payload: new contact with new ID

export const deleteContact = createAction("contacts/deleteContact"); //payload: ID*/

export const contactItemsSlice = createSlice({
  name: "items",
  initialState: null,
  reducers: {
    getContactsSuccess: (_, action) => {
      return action.payload; //full rewrite of contacts
    },
    addContact: {
      reducer: (state = [], action) => {
        const { name: newName } = action.payload; //destruct new contact from payload
        const normalizedNewName = newName.toLowerCase(); //check if the person already exists in contacts

        if (state.some( (contact) => {
          return contact.name.toLowerCase() === normalizedNewName;
        } )) {
          toast.error(`${newName} is already in contacts.`, {autoClose: 2000}); //new error message with react-toastify
          //alert(`${newName} is already in contacts.`);
          return state;
        }

        return [...state, action.payload]
      },

      prepare: (contact) => {
        return { payload: { id: nanoid(), ...contact }};
      },
    },

    deleteContact: (state = [], action) => {
      return state.filter((contact) => {
        return contact.id !== action.payload;
      });
    },
  },
});

export const selectItems = (state) => {
  return state.contacts.items;
}

export const fetchAsyncContacts = createAsyncThunk(
  
);

export const getContacts = () => {
  return (dispatch) => {
    dispatch({ type: "items/getContactsPending" });

    fetchContacts()
      .then((response) => {
        const contacts = (response.data === "Not found") ? [] : response.data;
        return dispatch({ type: "items/getContactsSuccess", payload: contacts})
      })
      .catch((error) => {
        dispatch({ type: "items/getContactsError", payload: error})
        //toast.error(error.message);
      })
  }
}

export const { addContact, deleteContact } = contactItemsSlice.actions;

export default contactItemsSlice.reducer;