import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import "../css/Navbar.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function Navbar() {
  const [name, setName] = useState("");

  const styles = {
    height: 70,
    padding: 10,
  };

  const loginFailure = (response) => {
    console.log(response);
    document.alert("Login failed");
  };

  const loginSuccess = (response) => {
    console.log(response);
    setName(response.profileObj.name);
  };

  const logoutSuccess = (response) => {
    console.log("logged out");
    setName("");
  };

  return (
    <nav>
      <img src={logo} style={styles} alt="logo" />
      <ul className="nav-links">
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/chingu-voyages/v24-geckos-team-02/graphs/contributors">
            About
          </a>
        </li>
        <li>
          {!name ? (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={loginSuccess}
              onFailure={loginFailure}
              cookiePolicy={"single_host_origin"}
            />
          ) : (
            <div style={{ display: "flex" }}>
              <p>{name}</p>
              <GoogleLogout clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText="Logout" onLogoutSuccess={logoutSuccess}>
                Logout
              </GoogleLogout>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
