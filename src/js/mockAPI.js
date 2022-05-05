import axios from "axios";

const baseURL = "https://6273fda6345e1821b2259a4f.mockapi.io/contacts";

export function fetchContacts() {
  return axios.get(baseURL);
}