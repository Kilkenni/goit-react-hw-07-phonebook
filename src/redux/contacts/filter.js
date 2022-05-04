import { createSlice } from "@reduxjs/toolkit";

//making this part with createSlice for practice

const contactFilterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    update(filter, action) {
      if (action.payload === filter) { 
        return filter;
      }

      return action.payload; //if using combineReducers with primitive values as state slices, we MUST return a value since Immer can't pick it up for us
      //at least I think that's what happens
    },
  },
});

export function selectFilter(state) {
  return state.contacts.filter;
}

export const { update } = contactFilterSlice.actions;
export default contactFilterSlice.reducer;