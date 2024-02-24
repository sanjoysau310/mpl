import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { RouterProvider } from "react-router-dom";
import { useFirebase } from "./context/firebase";
import { useEffect, useState } from "react";
import { useCookies } from "./cookies/useCookies";
import { router } from "./routes/router";

function App() {
  const firebase = useFirebase();
  const [adminAccess, setAdminAccess] = useState(false);
  const [userAccess, setUserAccess] = useState(false);

  const { cookies, getCookie } = useCookies();

  console.log(cookies);
  //console.log(getCookie("currentUser"));

  useEffect(() => {
    if (firebase != null) {
      if (firebase.userProfile.role === "admin") setAdminAccess(true);
      else if (firebase.userProfile.role === "user") setUserAccess(true);
    } else {
      setAdminAccess(false);
      setUserAccess(false);
    }
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
