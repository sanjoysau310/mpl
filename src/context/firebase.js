import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { child, get, onValue, ref as refDB, set } from "firebase/database";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref as refStorage,
  uploadBytes,
} from "firebase/storage";
import {
  fireStore,
  firebaseAuth,
  firebaseDB,
  googleProvider,
  storage,
} from "../firebase/firebaseConfig";
import { playerAge } from "../utils/ageCalculator";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [store, setStore] = useState(initialState);

  const [user, setUser] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      user ? setUser(user) : setUser("");
    });
    onValue(refDB(firebaseDB, `users/${user.uid}`), (res) =>
      setProfile(res.val())
    );
  }, []);

  const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const addUserToStore = async (uid, data) => {
    return await addDoc(collection(fireStore, "users"), {
      uid: uid,
      name: data.name,
      email: data.email,
      phone: data.phone,
      imageURL: "",
      poaURL: "",
    });
  };

  const addUserToDB = async (uid, fid, data) => {
    await set(refDB(firebaseDB, `users/${uid}`), {
      uid: uid,
      name: data.name,
      email: data.email,
      phone: data.phone,
      fid: fid,
      accessType: "user",
    });
  };

  const updateUserToStore = async (editData) => {
    const { id, dob, role, batting, bowling, address } = editData;
    const updateRef = doc(fireStore, "users", id);

    await updateDoc(updateRef, {
      dob,
      age: playerAge(dob),
      role,
      batting,
      bowling,
      address,
    });

    // const userRef = query(
    //   collection(fireStore, "users"),
    //   where("uid", "==", uid)
    // );
    // const findUsers = await getDocs(userRef);
    // findUsers.forEach(async (user) => {
    //   const getUser = doc(fireStore, "users", user.id);
    //   await updateDoc(getUser, {
    //     imageURL: uploadResult.ref.fullPath,
    //   });
    // });
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

    // const data = await onValue(refDB(firebaseDB, `users/${user.uid}`), (res) =>
    //   res.val()
    // );
    // return data;
  };

  const updateUser = async (data, name, phone) => {
    return await updateProfile(data, {
      displayName: name,
      phoneNumber: phone,
    });
  };

  const signinWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  //const fetchUser = profile;

  const userProfile = profile;

  const uploadImageToStoregae = async (uid, image) => {
    const imageRef = refStorage(
      storage,
      `/uploads/images/users/profilePic/${uid}-${image.name}`
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

  const uploadPOAToStoregae = async (id, uid, image) => {
    const imageRef = refStorage(
      storage,
      `/uploads/images/users/poa/${uid}-${image.name}`
    );
    const uploadResult = await uploadBytes(imageRef, image);
    // const userRef = query(
    //   collection(fireStore, "users"),
    //   where("uid", "==", uid)
    // );
    // const findUsers = await getDocs(userRef);
    // findUsers.forEach(async (user) => {
    //   const getUser = doc(fireStore, "users", user.id);
    //   await updateDoc(getUser, {
    //     imageURL: uploadResult.ref.fullPath,
    //   });
    // });

    const updateRef = doc(fireStore, "users", id);

    await updateDoc(updateRef, {
      poaURL: uploadResult.ref.fullPath,
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
        updateUserToStore,
        addUserToDB,
        updateUser,
        loginUser,
        signinWithGoogle,
        authUser,
        isLoggedIn,
        logoutUser,
        getUserByIDFromDB,
        //fetchUser,
        userProfile,
        uploadImageToStoregae,
        uploadPOAToStoregae,
        getAllUsers,
        getUserByID,
        getImageURL,
        fetchUserImageFromStore,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
