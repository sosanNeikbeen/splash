import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const AuthButtons = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const isLoggedIn = currentUser.isLoggedIn;

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      {isLoggedIn ? (
        <span className="navbar-item">
          <button
            onClick={handleLogout}
            className="button is-white is-outlined"
          >
            Logout
          </button>
        </span>
      ) : (
        <>
          <span className="navbar-item">
            <Link to="/signin">
              <button className="button is-white is-outlined">Login</button>
            </Link>
          </span>
          <span className="navbar-item">
            <Link to="/signup">
              <button className="button is-white is-outlined">Signup</button>
            </Link>
          </span>
        </>
      )}
    </>
  );
};

export default AuthButtons;
