import { useSelector } from "react-redux";

export const useAuth = () => {
  const { uid, email, accessToken, accessType } = useSelector(
    (state) => state.user.currentUser
  );

  return {
    isAuth: !!accessToken,
    uid,
    email,
    accessToken,
    accessType,
  };
};
