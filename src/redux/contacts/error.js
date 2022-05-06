import { createReducer } from "@reduxjs/toolkit";

//import { getContactsError } from "./items";
import { getContactsOperation, addContactOperation, deleteContactOperation } from "./asyncOperations";

import { toast } from "react-toastify";

export const contactError = createReducer(null, {
  [getContactsOperation.rejected]: (error, action) => {
    //console.log(action.payload)
    if (action.error.code === "ERR_BAD_REQUEST") {
      toast.info("No contacts available on the server. Try adding some?",{autoClose: 2000});
    }
    else {
      toast.error(`Server GET request failed with code ${action.error.code} and message: ${action.error.message}.`, {autoClose: 2000});
    }
    return action.error; //write error into status
  },

  [addContactOperation.rejected]: (error, action) => {
    toast.error(`Server POST request failed with code ${action.error.code} and message: ${action.error.message}.`, {autoClose: 2000});
    return action.error; //write error into status
  },

  [deleteContactOperation.rejected]: (error, action) => {
    toast.error(`Server DELETE request failed with code ${action.error.code} and message: ${action.error.message}.`, {autoClose: 2000});
    return action.error; //write error into status
  },
});