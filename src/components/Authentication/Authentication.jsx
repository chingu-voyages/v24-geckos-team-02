import { GoogleLogin, GoogleLogout } from "react-google-login";
import React, { useState, Fragment } from "react";

const Authentication = ({ accessTokenExpiresAt, setAccessToken }) => {
  const [name, setName] = useState("");
  const loginFailure = (response) => {
    console.log("Login failed: ", response);
    alert(`Login failed: ${response.error}`);
  };

  const loginSuccess = (response) => {
    console.log(response);
    setName(response.profileObj.name);
    setAccessToken({ value: response.tokenObj.access_token, expiresAt: response.tokenObj.expires_at });
  };

  const logoutSuccess = (response) => {
    console.log("logged out");
    setName("");
    setAccessToken({ value: "", expiresAt: "" });
  };

  const now = new Date();
  if (name && accessTokenExpiresAt && accessTokenExpiresAt < now.getTime()) {
    setName("");
    setAccessToken({ value: "", expiresAt: "" });
  }

  return (
    <Fragment>
      {name ? (
        <div style={{ display: "flex" }}>
          <p>{name}</p>
          <GoogleLogout clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText="Logout" onLogoutSuccess={logoutSuccess} />
        </div>
      ) : (
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
      )}
    </Fragment>
  );
};

export default Authentication;
