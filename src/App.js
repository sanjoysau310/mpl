import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { router } from "./routes/router";
import { useFirebase } from "./hooks/firebase/useFirebase";
import { useSelector } from "react-redux";
import { useAuth } from "./hooks/auth/useAuth";

function App() {
  const firebase = useFirebase();
  const user = useSelector((state) => state.user.currentUser);
  const isLoading = useSelector((state) => state.user.isLoading);
  const [adminAccess, setAdminAccess] = useState(false);
  const [userAccess, setUserAccess] = useState(false);

  // const { cookies, getCookie } = useCookies();

  const auth = useAuth();

  console.log(auth);
  //console.log(getCookie("currentUser"));

  useEffect(() => {
    firebase.authenticateUser();
  }, []);

  useEffect(() => {
    const handleBackButton = () => true;
    window.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      window.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
library.add(fab, fas, far);
