import { /*createAction, createReducer,*/  createSlice } from "@reduxjs/toolkit";
//import { nanoid } from "nanoid";
//import { toast } from "react-toastify";

import { getContactsOperation, addContactOperation, deleteContactOperation } from "./asyncOperations";

export const contactItemsSlice = createSlice({
  name: "items",
  initialState: null,
  reducers: {
  },
  extraReducers: {
    [getContactsOperation.fulfilled]: (items, action) => {
      return action.payload; //full rewrite of contacts/items - IMMER does NOT process this
    },
    //first init from the server if the server has no contacts saved
    [getContactsOperation.rejected]: (items, action) => {
      if (action.error.code === "ERR_BAD_REQUEST") {
        return []; //init with empty array
      }
      return items;
    },

    [addContactOperation.fulfilled]: (items, action) => {
      if (!items) { //first contact ever?
        return [action.payload];
      }
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