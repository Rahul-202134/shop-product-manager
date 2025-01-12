import { Client, Account, Databases, Storage } from 'appwrite';
import conf from '../conf/conf';
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject(conf.appwriteProjectId); // Replace with your Appwrite project ID

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage };
