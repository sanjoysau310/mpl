import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/layouts/layout";
import LandingPage from "../components/pages/landing/landingPage";
import { Contact } from "../components/pages/contact/contact";
import { About } from "../components/pages/about/about";
import { Events } from "../components/pages/events/events";
import { Gallery } from "../components/pages/gallery/gallery";
import { Teams } from "../components/pages/teams/teams";
import { Sponsors } from "../components/pages/sponsors/sponsors";
import { Admin } from "../components/pages/home/admin/admin";
import { UserLogin } from "../components/pages/login/userLogin";
import { UserRegister } from "../components/pages/register/userRegister";
import { PrivateRoutes } from "./privateRoutes";
import { UserProfileControl } from "../components/pages/home/user/profile/main/userProfileControl";
import { UsersList } from "../components/pages/home/user/list/usersList";
import { Schedule } from "../components/pages/schedule/schedule";
import { UserProfileHome } from "../components/pages/home/user/profile/main/userProfileHome";
import { UserAccount } from "../components/pages/home/user/profile/account/userAccount";

import { Main } from "../components/pages/home/user/profile/player/main";

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
        path: "player",
        element: <Main />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "players",
        element: <UsersList />,
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
      {
        path: "register",
        element: <UserRegister />,
      },
      {
        path: "login",
        element: <UserLogin />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          { path: "playerHome/:id", element: <UserProfileHome /> },
          { path: "userAccount/:id", element: <UserAccount /> },
          { path: "adminHome", element: <Admin /> },
        ],
      },
    ],
  },
]);
