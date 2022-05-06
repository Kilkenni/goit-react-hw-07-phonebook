import { combineReducers } from "@reduxjs/toolkit";

/*import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; */ // defaults to localStorage for web

import filterReducer from "./filter";
import itemsReducer from "./items";
import { contactStatus } from "./status";
import { contactError } from "./error";

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  status: contactStatus,
  error: contactError,
});

export default contactsReducer;

//using nested persistReducer to store only contacts/items, not contacts/filter
/*const persistContactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
}

const persistedContactsReducer = persistReducer(persistContactsConfig, contactsReducer);

export default persistedContactsReducer;*/ //instead of usual reducer we export persisted version, so no code outside of this module requires refactoring