import { GoogleLogin, GoogleLogout } from "react-google-login";
import React, { useState, Fragment } from "react";
import { useSnackbar } from "notistack";

const Authentication = ({ accessTokenExpiresAt, setAccessToken }) => {
  const [name, setName] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const loginFailure = (response) => {
    if (response.error === "idpiframe_initialization_failed") {
      enqueueSnackbar("You need to have 3rd party cookies enabled for login!", {
        variant: "error",
      });
    } else if (response.error === "popup_closed_by_user") {
      enqueueSnackbar("Login failed because the popup was closed!", {
        variant: "error",
      });
    } else {
      enqueueSnackbar(`Login failed: ${response.error}`, { variant: "error" });
    }
  };

  const loginSuccess = (response) => {
    setName(response.profileObj.name);
    setAccessToken({
      value: response.tokenObj.access_token,
      expiresAt: response.tokenObj.expires_at,
    });
    enqueueSnackbar(`Logged in as ${response.profileObj.name}`, {
      variant: "success",
    });
  };

  const logoutSuccess = (response) => {
    setName("");
    setAccessToken({ value: "", expiresAt: "" });
    enqueueSnackbar("Logged out");
  };

  const now = new Date();
  if (name && accessTokenExpiresAt && accessTokenExpiresAt < now.getTime()) {
    setName("");
    setAccessToken({ value: "", expiresAt: "" });
  }

  return (
    <Fragment>
      {name ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ paddingRight: "8px" }}>{name}</p>
          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logoutSuccess}
          />
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
