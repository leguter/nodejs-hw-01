import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
    let contacts = await readContacts();
    if (contacts.length >= 1) {
         contacts.pop();
        writeContacts(contacts);
    }
    
};

removeLastContact();
