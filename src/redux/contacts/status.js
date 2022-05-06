import { createReducer } from "@reduxjs/toolkit";

import { getContactsOperation, addContactOperation, deleteContactOperation } from "./asyncOperations";

// idle | loading/adding/deleting | success | error
export const contactStatus = createReducer("idle", {
  [getContactsOperation.pending]: (status, action) => {
    return "loading";
  },
  [getContactsOperation.fulfilled]: (status, action) => {
    return "success";
  },
  [getContactsOperation.rejected]: (status, action) => {
    return "error";
  },

  [addContactOperation.pending]: (status, action) => {
    return "adding";
  },
  [addContactOperation.fulfilled]: (status, action) => {
    return "success";
  },
  [addContactOperation.rejected]: (status, action) => {
    return "error";
  },

  [deleteContactOperation.pending]: (status, action) => {
    return "deleting";
  },
  [deleteContactOperation.fulfilled]: (status, action) => {
    return "success";
  },
  [deleteContactOperation.rejected]: (status, action) => {
    return "error";
  },
});

export const selectStatus = (state) => {
  return state.contacts.status;
}