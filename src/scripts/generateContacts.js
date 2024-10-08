import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export async function generateContacts(count) {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: count }, createFakeContact);
    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
}
generateContacts(5);
// Для виконання команди: npm run generate
