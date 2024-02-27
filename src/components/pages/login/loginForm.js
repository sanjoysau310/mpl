import React, { useState } from "react";

export const LoginForm = ({handleSubmit}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [userProfile, setUserProfile] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={e=>handleSubmit(e,user)}>
      <div className="row gy-3 overflow-hidden">
        <div className="col-12">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
              id="email"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleChange}
              id="password"
              placeholder="Password"
              required
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              name="remember_me"
              id="remember_me"
            />
            <label
              className="form-check-label text-secondary"
              htmlFor="remember_me">
              Keep me logged in
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="d-grid">
            <button className="login-btn" type="submit">
              Log in
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
