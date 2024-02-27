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
} from "../../firebase/firebaseConfig";
import { playerAge } from "../../utils/ageCalculator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authAccess, authUser, setLoading } from "../../store/slices/userSlice";

export const useFirebase = () => {
  const dispatch = useDispatch();

  // Authentication
  const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const authenticateUser = async () => {
    await onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch(authUser(user));
        getUserByIDFromDB(user.uid).then((res) => {
          dispatch(authAccess(res.val()));
        });
        dispatch(setLoading(false));
      } else console.log("user not logged in");
    });
  };

  const logoutUser = async () => {
    return await signOut(firebaseAuth);
  };

  // firestore
  const addUserToStore = async (uid, data) => {
    return await addDoc(collection(fireStore, "users"), {
      uid: uid,
      name: data.name,
      email: data.email,
      phone: data.phone,
      imageURL: "",
      poaURL: "",
      played: "",
    });
  };

  const updateUserToStore = async (id, editData) => {
    const { dob, role, batting, bowling, address } = editData;
    const updateRef = doc(fireStore, "users", id);
    await updateDoc(updateRef, {
      dob,
      age: playerAge(dob),
      role,
      batting,
      bowling,
      address,
      pastTeam: "",
      currentTeam: "",
      soldPrice: "",
      teamOwned: "",
      bidAmount: "",
    });
  };

  const updatePlayerToStore = async (id, playerData) => {
    const { played, pastTeam, basePrice } = playerData;
    const updateRef = doc(fireStore, "users", id);
    await updateDoc(updateRef, {
      played,
      pastTeam,
      basePrice,
    });
  };

  const updateOwnerToStore = async (id, ownerData) => {
    const { played, pastTeam, maxBidAmount } = ownerData;
    const updateRef = doc(fireStore, "users", id);
    await updateDoc(updateRef, {
      played,
      pastTeam,
      maxBidAmount,
    });
  };

  const getUserByID = async (id) => {
    const userRef = doc(fireStore, "users", id);
    const res = await getDoc(userRef);
    if (res) dispatch(setLoading(false));
    return res;
  };

  const getAllUsers = async () => {
    return await getDocs(collection(fireStore, "users"));
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

  //realtime DB
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

  const getUserByIDFromDB = async (uid) => {
    return await get(child(refDB(firebaseDB), `users/${uid}`));
  };

  //storage
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

  const getImageURL = async (path) => {
    return await getDownloadURL(refStorage(storage, path));
  };

  return {
    createUser,
    loginUser,
    authenticateUser,
    logoutUser,

    addUserToStore,
    updateUserToStore,
    updatePlayerToStore,
    updateOwnerToStore,
    getUserByID,
    getAllUsers,
    fetchUserImageFromStore,

    addUserToDB,
    getUserByIDFromDB,

    uploadImageToStoregae,
    uploadPOAToStoregae,
    getImageURL,
  };
};
