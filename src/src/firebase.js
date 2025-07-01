mport { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXX", // your actual Web API key
  authDomain: "safaai-app.firebaseapp.com",
  projectId: "safaai-app",
  storageBucket: "safaai-app.appspot.com",
  messagingSenderId: "295042126437",
  appId: "1:295042126437:web:xxxxxx"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
