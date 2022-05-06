import { useSelector, useDispatch } from "react-redux";

import ContactItem from "../ContactItem";
//import propTypes from "prop-types";
import styles from "./ContactList.module.css"

import { deleteContact, selectItems } from "../../redux/contacts/items";
import { selectFilter } from "redux/contacts/filter";

import { getContactsOperation } from "redux/contacts/asyncOperations/getContactsOperation";
import { deleteContactOperation } from "redux/contacts/asyncOperations/deleteContactOperation";

const ContactList = () => {

    const lowCaseFilter = useSelector(selectFilter).toLowerCase();

    const dispatch = useDispatch();
    
    const contacts = useSelector(selectItems);

    if (!contacts) {
        //dispatch(getContacts());
        dispatch(getContactsOperation());
    }

    return (
        (!contacts || (contacts.length === 0)) ?
        <p>No contacts so far...</p> :           
        <ul className={styles.contactList}>
            { contacts.map((contact) => {
                // console.log(`${contact.name.toLowerCase()} includes ${lowCaseFilter}: ${contact.name.toLowerCase().includes(lowCaseFilter)}`);
                return (contact.name.toLowerCase().includes(lowCaseFilter) &&
                    <li key={contact.id} className={styles.contact}>
                        <ContactItem
                            name={contact.name}
                            number={contact.phone}
                        />
                        <button
                            type="button"
                            onClick={() => dispatch(deleteContactOperation(contact.id))}
                            className={styles.btnDeleteContact}
                        >Delete contact
                        </button>
                    </li>);         
            })}
        </ul>        
    );
}

ContactList.propTypes = {
    // contacts: propTypes.arrayOf(
    //     propTypes.shape({
    //         id: propTypes.string.isRequired,
    //         name: propTypes.string.isRequired,
    //         number:propTypes.string.isRequired,
    //     })
    // ).isRequired,
    //filter: propTypes.string,
}

export default ContactList;