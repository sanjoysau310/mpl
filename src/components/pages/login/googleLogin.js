import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../context/firebase";
import { useNavigate } from "react-router-dom";
export const GoogleLogin = () => {
  const firebase = useFirebase();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // useEffect(() => {
  //   firebase.isLoggedIn ? navigate("/") : navigate("/login");
  // }, []);
  const sigininWithGoogle = async () => {
    //const response = firebase.signinWithGoogle();

    const userData = await firebase
      .signinWithGoogle()
      .then((result) => result.user);

    console.log(userData);
    setUser((prevState) => {
      return {
        ...prevState,
        name: userData.displayName,
        email: userData.email,
        phone: userData.phoneNumber,
      };
    });
    // setUser({
    //   name: userData.displayName,
    //   email: userData.email,
    //   phone: userData.phoneNumber,
    // });
    console.log(firebase.fetchUser);
    // if (userData.uid !== firebase.userProfile.id) {
    //   const userResponse = await firebase.putUser(userData.uid, user);
    // }

    navigate("/");
    console.log(userData);
  };
  return (
    <button
      className="flex--item s-btn s-btn__muted s-btn__outlined s-btn__icon google-login"
      data-ga='["sign up","Sign Up Started - Google","New Post",null,null]'
      onClick={sigininWithGoogle}>
      <svg
        aria-hidden="true"
        className="native svg-icon iconGoogle"
        width={18}
        height={18}
        viewBox="0 0 18 18">
        <path
          fill="#4285F4"
          d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
        />
        <path
          fill="#34A853"
          d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
        />
        <path
          fill="#FBBC05"
          d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
        />
        <path
          fill="#EA4335"
          d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
        />
      </svg>{" "}
      Sign in using Google
    </button>
  );
};
