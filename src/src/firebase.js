import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5DIhgHtx52-IQ83YNEZjo1RuvQ-NdGFY",
  authDomain: "safaai-a4388.firebaseapp.com",
  projectId: "safaai-a4388",
  storageBucket: "safaai-a4388.appspot.com",
  messagingSenderId: "937526139397",
  appId: "1:937526139397:web:03e625b8bd8e9bf50bda6c",
  measurementId: "G-DRC4HX9YL9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
