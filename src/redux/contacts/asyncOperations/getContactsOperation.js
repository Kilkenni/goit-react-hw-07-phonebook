import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "js/mockAPI";

export const getContactsOperation = createAsyncThunk(
  "items/getContacts",
  async (thunkAPI) => {
    const response = await fetchContacts();
    /*if (response.status !== 200) {
      throw new Error(`Server request failed with code ${response.status} and message: ${response.statusText}.`);
    }*/

    const contacts = (response.data === "Not found") ? [] : response.data;

    return contacts;
  }
)