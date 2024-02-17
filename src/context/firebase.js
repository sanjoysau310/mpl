import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  child,
  get,
  getDatabase,
  onValue,
  ref as refDB,
  set,
} from "firebase/database";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref as refStorage,
  uploadBytes,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBT0RQN78s4nQesU-Zc9EYc3ttAKzYyP-8",
  authDomain: "mpl-2k24.firebaseapp.com",
  projectId: "mpl-2k24",
  storageBucket: "mpl-2k24.appspot.com",
  messagingSenderId: "380968441362",
  appId: "1:380968441362:web:e997d4014f8a8754b26acb",
  databaseURL: "https://mpl-2k24-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firebaseDB = getDatabase(firebaseApp);
const fireStore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState("");
  const [profiles, setProfiles] = useState("");
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      user ? setUser(user) : setUser("");
    });
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const addUserToStore = async (uid, data) => {
    return await addDoc(collection(fireStore, "users"), {
      uid: uid,
      name: data.name,
      email: data.email,
      phone: data.phone,
      imageURL: "",
    });
  };

  const addUserToDB = async (uid, fid, data) => {
    await set(refDB(firebaseDB, `users/${uid}`), {
      uid: uid,
      name: data.name,
      email: data.email,
      phone: data.phone,
      fid: fid,
      role: "user",
    });
  };

  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const authUser = user;
  const isLoggedIn = user ? true : false;

  const logoutUser = () => {
    return signOut(firebaseAuth);
  };

  const getUserByIDFromDB = async (uid) => {
    return await get(child(refDB(firebaseDB), `users/${uid}`));

    //await onValue(refDB(firebaseDB, `users/${user.uid}`), (res) => {
    //   setProfile(res.val());
    // });
  };

  const updateUser = (data, name, phone) => {
    return updateProfile(data, {
      displayName: name,
      phoneNumber: phone,
    });
  };

  const signinWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  const fetchUser = profile;

  const userProfile = profile;

  const uploadImageToStoregae = async (uid, image) => {
    const imageRef = refStorage(
      storage,
      `uploads/images/${Date.now()}-${image.name}`
    );
    const uploadResult = await uploadBytes(imageRef, image);
    const userRef = query(
      collection(fireStore, "users"),
      where("uid", "==", uid)
    );
    const findUsers = await getDocs(userRef);
    findUsers.forEach(async (user) => {
      const getUser = doc(fireStore, "users", user.id);
      await updateDoc(getUser, {
        imageURL: uploadResult.ref.fullPath,
      });
    });
  };

  const getAllUsers = async () => {
    return await getDocs(collection(fireStore, "users"));
  };

  const getUserByID = async (id) => {
    const userRef = doc(fireStore, "users", id);
    const res = await getDoc(userRef);
    //console.log(res);
    return res;
  };

  const getImageURL = async (path) => {
    return await getDownloadURL(refStorage(storage, path));
  };

  const fetchUserImageFromStore = async (uid) => {
    const userRef = query(
      collection(fireStore, "users"),
      where("id", "==", uid)
    );
    const findUsers = await getDocs(userRef);
    findUsers.forEach(async (user) => {
      return doc(fireStore, "users", user.id);
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        createUser,
        addUserToStore,
        addUserToDB,
        updateUser,
        loginUser,
        signinWithGoogle,
        authUser,
        isLoggedIn,
        logoutUser,
        getUserByIDFromDB,
        fetchUser,
        userProfile,
        uploadImageToStoregae,
        getAllUsers,
        getUserByID,
        getImageURL,
        fetchUserImageFromStore,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
