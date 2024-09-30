import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export async function addOneContact() {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...contacts, newContact];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
}
addOneContact();
// Для виконання команди: npm run add-one
