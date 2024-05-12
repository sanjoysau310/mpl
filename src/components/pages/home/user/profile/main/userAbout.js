import React from "react";
import { useSelector } from "react-redux";

export const UserAbout = () => {
  const profile = useSelector((state) => state.user.profile);
  const { email, name, uid, phone, role, batting, bowling, dob, age, address } =
    profile;
  return (
    <>
      <table className="table table-profile">
        <thead>
          <tr>
            <th colSpan={2}>BASIC INFORMATION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="field">Birth of Date</td>
            <td className="value">{dob}</td>
          </tr>
          <tr>
            <td className="field">Age</td>
            <td className="value">{age}</td>
          </tr>
          <tr>
            <td className="field">UPI ID</td>
            <td className="value">NA</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-profile">
        <thead>
          <tr>
            <th colSpan={2}>CONTACT INFORMATION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="field">Mobile Phones</td>
            <td className="value">
              <div className="m-b-5">
                {/* <b>Contact</b>-<span className="text-muted">{phone}</span> */}
                {phone}
              </div>
              {/* <div>
                <b>WhatsApp</b>-<span className="text-muted">+91-88888888</span>
              </div> */}
            </td>
          </tr>
          <tr>
            <td className="field">Email</td>
            <td className="value">{email}</td>
          </tr>

          <tr>
            <td className="field">Address</td>
            <td className="value">{address}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
