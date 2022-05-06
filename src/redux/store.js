import { configureStore } from "@reduxjs/toolkit";

//import { persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import contactsReducer from "./contacts/contactsReducer";
//import itemsReducer from "./contacts/items";
//import filterReducer from "./contacts/filter";

// const DUMMY_CONTACTS = [
//   {id: 'KindLady', name: 'Athene Margoulis', number: '459-12-56'},
//   {id: 'Nucl3arSnake', name: 'Francis Pritchard', number: '443-89-12'},
//   {id: 'FlyGirl', name: 'Faridah Malik', number: '645-17-79'},
//   {id: 'TyphoonMaster', name: 'Vasili Shevchenko', number: '227-91-26'},
// ];

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  preloadedState: {
    contacts: {
      items: null,
      filter: "",
      status: "idle", // idle | operation-type | success | error
      error: null,
    }
  },
});

//export const persistor = persistStore(store);