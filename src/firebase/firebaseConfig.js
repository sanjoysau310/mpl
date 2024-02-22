import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBT0RQN78s4nQesU-Zc9EYc3ttAKzYyP-8",
  authDomain: "mpl-2k24.firebaseapp.com",
  projectId: "mpl-2k24",
  storageBucket: "mpl-2k24.appspot.com",
  messagingSenderId: "380968441362",
  appId: "1:380968441362:web:e997d4014f8a8754b26acb",
  databaseURL: "https://mpl-2k24-default-rtdb.firebaseio.com",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const firebaseDB = getDatabase(firebaseApp);
export const fireStore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
