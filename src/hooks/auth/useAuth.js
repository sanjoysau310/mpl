import { useSelector } from "react-redux";

export const useAuth = () => {
  const { uid, name, email, accessToken, accessType } = useSelector(
    (state) => state.user.currentUser
  );

  return {
    isAuth: !!accessToken,
    uid,
    name,
    email,
    accessToken,
    accessType,
  };
};
