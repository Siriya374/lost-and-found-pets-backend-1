import firebase from "../firebase.js";
import User from "../models/users.models.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { encrypt, decrypt } from "../functions/encode_data.js";
import { v4 as uuidv4 } from 'uuid';

const db = getFirestore(firebase);

const createUser = async (req, res) => {
  try {
    var data = req.body
    const { username, email } = req.body;

    const userExistsQuery = collection(db, "users");
    const checkUsername = await getDocs(
      query(userExistsQuery, where("username", "==", username))
    );

    if (checkUsername.empty == false) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const checkEmail = await getDocs(
      query(userExistsQuery, where("email", "==", email))
    );
    if (checkEmail.empty == false) {
      return res.status(400).json({ error: "Email already exists" });
    }

    var payload = {
      id: uuidv4(),
      email: data.email,
      encrypted_password: encrypt(data.password),
      reset_password_token: "",
      reset_password_sent_at: null,
      remember_created_at: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
      tel: data.tel || "",
      username: data.username,
      fblink: data.fblink|| "",
      address: data.address|| "",
      facebook: data.facebook|| "",
      not_show_address: false,
      is_admin: false,
      confirmation_token: "",
      confirmed_at: null,
      confirmation_sent_at: null,
      unconfirmed_email: true,
    }

    const newUser = await addDoc(collection(db, "users"), payload);
    return res.status(200).json({ message: "User created successfully", username: newUser });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

export { createUser };
