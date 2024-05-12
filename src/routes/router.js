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
import { UsersList } from "../components/pages/home/user/list/usersList";
import { Schedule } from "../components/pages/schedule/schedule";
import { UserProfileHome } from "../components/pages/home/user/profile/main/userProfileHome";
import { UserAccount } from "../components/pages/home/user/profile/account/userAccount";
import { UserProfileMain } from "../components/pages/home/user/profile/main/userProfileMain";

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
        path: "user",
        element: <UserProfileMain />,
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
        path: "users",
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
          { path: "userHome/:id", element: <UserProfileMain /> },
          { path: "userAccount/:id", element: <UserAccount /> },
          { path: "adminHome", element: <Admin /> },
        ],
      },
    ],
  },
]);
