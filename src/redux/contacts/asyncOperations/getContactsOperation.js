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
  },
  {
    condition: ( _, { getState, extra }) => {
      //pre-check if a fetch is already ongoing
      const { contacts } = getState();
      console.log(contacts)
      const { status } = contacts;
      if (status !== "idle" && status !== "success" && status !== "error") {
        //toast.warn(`Another operation - ${status} - is in progress. Try again later.`);
        return false;
      };
      return true;
    },
  }
)