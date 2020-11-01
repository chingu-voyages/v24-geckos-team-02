import { GoogleLogin, GoogleLogout } from "react-google-login";
import React, { useState, Fragment } from "react";

const Authentication = ({ setAccessToken }) => {
  const [name, setName] = useState("");
  const loginFailure = (response) => {
    console.log(response);
    document.alert("Login failed");
  };

  const loginSuccess = (response) => {
    console.log(response);
    setName(response.profileObj.name);
    setAccessToken(response.tokenObj.access_token);
  };

  const logoutSuccess = (response) => {
    console.log("logged out");
    setName("");
    setAccessToken("");
  };
  return (
    <Fragment>
      {!name ? (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={loginSuccess}
          onFailure={loginFailure}
          cookiePolicy={"single_host_origin"}
          scope={["profile", "https://www.googleapis.com/auth/books", "https://www.googleapis.com/auth/userinfo.profile", "openid"].join(
            " "
          )}
        />
      ) : (
        <div style={{ display: "flex" }}>
          <p>{name}</p>
          <GoogleLogout clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText="Logout" onLogoutSuccess={logoutSuccess}>
            Logout
          </GoogleLogout>
        </div>
      )}
    </Fragment>
  );
};

export default Authentication;
