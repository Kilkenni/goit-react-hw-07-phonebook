import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact } from "js/mockAPI";

import { toast } from "react-toastify";

export const addContactOperation = createAsyncThunk(
  "items/addContact",
  async (contact, thunkAPI) => {
    const response = await addContact(contact);
    if (response.status !== 201) {
      return thunkAPI.rejectWithValue({ code: response.status, message: response.statusText });
      //if our POST fails, mark the entire promise as rejected and pass axios status as an "error message"
    }
    return response.data;
  },
  {
    condition: (contact, { getState, extra }) => {
      //pre-check against current Redux state: what if the contact already exists? Comparison by name.
      //Normally a backend should do this but mockapi, being a "test api", is not capable of that
      const { contacts } = getState();
      /*const { status } = contacts;
      if (status !== "idle" && status !== "success" && status !== "error") {
        toast.warn(`Another operation - ${status} - is in progress. Try again later.`);
        return false;
      };*/

      const contactList = contacts ? contacts.items : [];
      
      const { name: newName } = contact; //destruct new contact from payload
      const normalizedNewName = newName.toLowerCase(); //check if the person already exists in contacts

      if ( contactList.some( (contact) => {
        return contact.name.toLowerCase() === normalizedNewName;
      }
      )) {
        toast.error(`${newName} is already in contacts.`, {autoClose: 2000}); //new error message with react-toastify
        return false; //abort POST
      };
    },
  }
);