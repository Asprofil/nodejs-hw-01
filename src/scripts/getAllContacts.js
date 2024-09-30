import { readContacts } from '../utils/readContacts.js';

export async function getAllContacts() {
  try {
    const contacts = await readContacts();
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
  }
}
getAllContacts();
// Для виконання команди: npm run get-all
