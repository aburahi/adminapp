
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAliwJh_ZCflMzm6asZ0wNrCRhTBCRgdrI",
  authDomain: "mycrud-e6a7c.firebaseapp.com",
  projectId: "mycrud-e6a7c",
  storageBucket: "mycrud-e6a7c.appspot.com",
  messagingSenderId: "933103846808",
  appId: "1:933103846808:web:5e2f9d36b2691219e457ed"
};
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth = getAuth(app);