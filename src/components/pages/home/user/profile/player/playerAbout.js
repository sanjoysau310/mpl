import React from "react";

export const PlayerAbout = () => {
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
            <td className="value">November 4, 1989</td>
          </tr>
          <tr>
            <td className="field">Age</td>
            <td className="value">0</td>
          </tr>
          <tr>
            <td className="field">UPI ID</td>
            <td className="value">3336@upi</td>
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
                <b>Contact</b>-<span className="text-muted">+91-999999999</span>
              </div>
              <div>
                <b>WhatsApp</b>-<span className="text-muted">+91-88888888</span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="field">Email</td>
            <td className="value">admin@mpl.com</td>
          </tr>

          <tr>
            <td className="field">Address</td>
            <td className="value">
              Twitter, Inc. <br />
              1355 Market Street, Suite 900
              <br />
              San Francisco, CA 94103
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
