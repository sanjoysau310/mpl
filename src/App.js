import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/landing/landingPage";
import { RootLayout } from "./components/layouts/layout";
import { Contact } from "./components/pages/contact/contact";
import { Login } from "./components/pages/login/login";
import { Register } from "./components/pages/register/register";
import { UserHome } from "./components/pages/players/player/userHome";
import { useFirebase } from "./context/firebase";
import { useEffect, useState } from "react";
import { PlayersList } from "./components/pages/players/list/playersList";
import { About } from "./components/pages/about/about";
import { Events } from "./components/pages/events/events";
import { Gallery } from "./components/pages/gallery/gallery";
import { Teams } from "./components/pages/teams/teams";
import { Sponsors } from "./components/pages/sponsors/sponsors";
import { Admin } from "./components/pages/home/admin/admin";
import { UserLogin } from "./components/pages/login/userLogin";
import { UserRegister } from "./components/pages/register/userRegister";
import { UserPicture } from "./components/pages/players/player/userPicture";
import { UserProfileHome } from "./components/pages/players/player/user/userProfileHome";

function App() {
  const firebase = useFirebase();
  const [adminAccess, setAdminAccess] = useState(false);
  const [userAccess, setUserAccess] = useState(false);
  //console.log(firebase);

  useEffect(() => {
    if (firebase != null) {
      if (firebase.userProfile.role === "admin") setAdminAccess(true);
      else if (firebase.userProfile.role === "user") setUserAccess(true);
    } else {
      setAdminAccess(false);
      setUserAccess(false);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        // public routes
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "players",
          element: <PlayersList />,
        },
        {
          path: "profile",
          element: <UserProfileHome />,
        },
        {
          path: "sponsors",
          element: <Sponsors />,
        },
        {
          path: "teams",
          element: <Teams />,
        },

        {
          path: "contact",
          element: <Contact />,
        },
        // {
        //   path: "register",
        //   element: <Register />,
        // },
        {
          path: "register",
          element: <UserRegister />,
        },
        {
          path: "login",
          element: <UserLogin />,
        },
        // {
        //   path: "login",
        //   element: <Login />,
        // },
        // protected routes
        // { path: "playerHome", element: userAccess ? <UserHome /> : <Login /> },
        { path: "playerHome/:id", element: <UserHome /> },
        { path: "adminHome", element: <Admin /> },
        //admin routes
        // {
        //   path: "",
        //   element: adminAccess ? <LandingPage /> : <Login />,
        // },
        {
          path: "",
          element: <LandingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
library.add(fab, fas, far);
