import { GoogleLogin, GoogleLogout } from "react-google-login";
import React, { useState, Fragment } from "react";
import { useSnackbar } from "react-simple-snackbar";

const Authentication = ({ accessTokenExpiresAt, setAccessToken }) => {
  const [name, setName] = useState("");
  const [snackbar] = useSnackbar();
  const loginFailure = (response) => {
    if (response.error === "idpiframe_initialization_failed") {
      snackbar("You need to have cookies enabled for login!");
    } else if (response.error === "popup_closed_by_user") {
      snackbar("Login failed because the popup was closed!");
    } else {
      snackbar(`Login failed: ${response.error}`);
    }
  };

  const loginSuccess = (response) => {
    console.log(response);
    setName(response.profileObj.name);
    setAccessToken({ value: response.tokenObj.access_token, expiresAt: response.tokenObj.expires_at });
    snackbar(`Logged in as ${response.profileObj.name}`);
  };

  const logoutSuccess = (response) => {
    setName("");
    setAccessToken({ value: "", expiresAt: "" });
    snackbar("Logged out");
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
          scope="https://www.googleapis.com/auth/books"
        />
      )}
    </Fragment>
  );
};

export default Authentication;
