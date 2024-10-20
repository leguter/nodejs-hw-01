import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
    let aggedData =  await readContacts();
    const data = Array(number).fill(0).map(createFakeContact);
  await  writeContacts([...aggedData, ...data]);
};

generateContacts(5);
