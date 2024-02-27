import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/layouts/layout";
import LandingPage from "../components/pages/landing/landingPage";
import { Contact } from "../components/pages/contact/contact";
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
import { UserProfileControl } from "../components/pages/home/user/profile/main/userProfileControl";

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
          { path: "playerHome/:id", element: <UserProfileControl /> },
          { path: "adminHome", element: <Admin /> },
        ],
      },
    ],
  },
]);
