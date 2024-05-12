import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env;

assert(PORT, 'Port is required');
assert(HOST, 'Host is required');

export default {
  port: PORT,
  host: HOST,
  hostUrl: HOST_URL,
  firebaseConfig: {
     apiKey: "AIzaSyDJBUBBr7-NuWXi_9o3MO3GfzK-0cXQkwI",
  authDomain: "lost-and-found-pet-cf18d.firebaseapp.com",
  projectId: "lost-and-found-pet-cf18d",
  storageBucket: "lost-and-found-pet-cf18d.appspot.com",
  messagingSenderId: "353909915573",
  appId: "1:353909915573:web:3d49bae126eb2a6c76a3fc"
  },
};