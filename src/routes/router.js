import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/layouts/layout";
import LandingPage from "../components/pages/landing/landingPage";
import { Contact } from "../components/pages/contact/contact";
import { Login } from "../components/pages/login/login";
import { Register } from "../components/pages/register/register";
import { UserHome } from "../components/pages/players/player/userHome";
import { PlayersList } from "../components/pages/players/list/playersList";
import { About } from "../components/pages/about/about";
import { Events } from "../components/pages/events/events";
import { Gallery } from "../components/pages/gallery/gallery";
import { Teams } from "../components/pages/teams/teams";
import { Sponsors } from "../components/pages/sponsors/sponsors";
import { Admin } from "../components/pages/home/admin/admin";
import { UserLogin } from "../components/pages/login/userLogin";
import { UserRegister } from "../components/pages/register/userRegister";
import { PrivateRoutes } from "./privateRoutes";
import { UserProfileHome } from "../components/pages/home/user/profile/userProfileHome";

export const router = createBrowserRouter([
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
      // { path: "playerHome/:id", element: <UserHome /> },
      {
        element: <PrivateRoutes />,
        children: [
          { path: "playerHome/:id", element: <UserProfileHome /> },
          { path: "adminHome", element: <Admin /> },
        ],
      },

      //admin routes
      // {
      //   path: "",
      //   element: adminAccess ? <LandingPage /> : <Login />,
      // },
    ],
  },
]);
