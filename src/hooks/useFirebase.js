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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authAccess, authUser, setLoading } from "../store/slices/userSlice";

export const useFirebase = () => {
  const dispatch = useDispatch();

  const authenticateUser = () => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch(authUser(user));
        getUserByIDFromDB(user.uid).then((res) => {
          dispatch(authAccess(res.val()));
        });
        dispatch(setLoading(false));
      } else console.log("user not logged in");
    });
  };

  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const logoutUser = () => {
    return signOut(firebaseAuth);
  };
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
    const updateRef = doc(fireStore, "users", id);
    await updateDoc(updateRef, {
      poaURL: uploadResult.ref.fullPath,
    });
  };

  const getUserByIDFromDB = async (uid) => {
    return await get(child(refDB(firebaseDB), `users/${uid}`));
  };

  const getUserByID = async (id) => {
    const userRef = doc(fireStore, "users", id);
    const res = await getDoc(userRef);
    return res;
  };

  const getAllUsers = async () => {
    return await getDocs(collection(fireStore, "users"));
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

  return {
    authenticateUser,
    loginUser,
    logoutUser,
    createUser,
    addUserToStore,
    addUserToDB,
    uploadImageToStoregae,
    uploadPOAToStoregae,
    getUserByIDFromDB,
    getUserByID,
    getAllUsers,
    getImageURL,
    fetchUserImageFromStore,
  };
};
