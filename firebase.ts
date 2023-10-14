import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1lzdJPQyumiRpSiBZROajpWwYzKJNnrg",
  authDomain: "chatapp-with-chatgpt.firebaseapp.com",
  projectId: "chatapp-with-chatgpt",
  storageBucket: "chatapp-with-chatgpt.appspot.com",
  messagingSenderId: "324129148419",
  appId: "1:324129148419:web:ad4aaf0944b2a015618836",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

