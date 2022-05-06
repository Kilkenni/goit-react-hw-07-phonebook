import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContact } from "js/mockAPI";

//import { toast } from "react-toastify";

export const deleteContactOperation = createAsyncThunk(
  "items/deleteContact",
  async (id, thunkAPI) => {
    const response = await deleteContact(id);
    if (response.status < 200 || response.status > 299) {
      return thunkAPI.rejectWithValue({ code: response.status, message: response.statusText });
      //if our POST fails, mark the entire promise as rejected and pass axios status as an "error message"
    }

    return response.data;
  },
);