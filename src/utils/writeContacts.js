import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export async function writeContacts(data) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf8');
    console.log('Contacts successfully written.');
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
}
