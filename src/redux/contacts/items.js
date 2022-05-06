import { /*createAction, createReducer,*/  createSlice } from "@reduxjs/toolkit";
//import { nanoid } from "nanoid";
//import { toast } from "react-toastify";

import { getContactsOperation } from "./asyncOperations/getContactsOperation";
import { addContactOperation } from "./asyncOperations/addContactOperation";
import { deleteContactOperation } from "./asyncOperations/deleteContactOperation";

export const contactItemsSlice = createSlice({
  name: "items",
  initialState: null,
  reducers: {
  },
  extraReducers: {
    [getContactsOperation.fulfilled]: (items, action) => {
      return action.payload; //full rewrite of contacts/items - IMMER does NOT process this
    },
    [addContactOperation.fulfilled]: (items, action) => {
      return [...items, action.payload]; //without IMMER - for practice
    },
    [deleteContactOperation.fulfilled]: (items, action) => {
      const { id } = action.payload; //ID of the successfully deleted contact
      return items.filter((contact) => {
        return contact.id !== id;
      });
    },
  }
});

export const selectItems = (state) => {
  return state.contacts.items;
}

export const { addContact, deleteContact } = contactItemsSlice.actions;

export default contactItemsSlice.reducer;