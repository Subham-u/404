import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLK3vMNema5PG8yY6sT7arduuYAUiMTSg",
  authDomain: "hackathon-1a058.firebaseapp.com",
  projectId: "hackathon-1a058",
  storageBucket: "hackathon-1a058.appspot.com",
  messagingSenderId: "535222388133",
  appId: "1:535222388133:web:acb991f9be9340349b144c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
