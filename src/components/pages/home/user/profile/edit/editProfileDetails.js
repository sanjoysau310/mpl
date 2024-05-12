import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "../../../../../../hooks/firebase/useFirebase";
import { useDispatch } from "react-redux";
import { tabActions } from "../../../../../../store/slices/tabSlice";
import { EditForm } from "./editForm";

export const EditProfileDetails = () => {
  let params = useParams();
  let navigate = useNavigate();
  const firebase = useFirebase();
  const dispatch = useDispatch();

  const handleEditProfile = (e, editProfile) => {
    e.preventDefault();
    console.log(editProfile);
    firebase.updateUserToStore(params.id, editProfile).then((res) => {
      console.log(res);
      dispatch(tabActions.editProfile());
    });
  };

  return (
    <div className="tab-pane fade show active profile-edit pt-3">
      <EditForm handleSubmit={handleEditProfile} />
    </div>
  );
};
