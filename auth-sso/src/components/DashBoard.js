import React from "react";
import { useMsal } from "@azure/msal-react";

const DashBoard = () => {
  const { msalInstance, accounts } = useMsal();

  const handleLogout = (msal, accounts) => {
    const logoutRequest = {
      account: accounts[0].homeAccountId,
      postLogoutRedirectUri: "http://localhost:3000",
    };
    msal.logoutRedirect(logoutRequest);
  };
  return (
    <div>
      <button onClick={() => handleLogout(msalInstance, accounts)}>
        {" "}
        Logout
      </button>
      <h1 style={{ color: "white" }}>
        Welcome to DashBoard {accounts[0].name}
      </h1>
    </div>
  );
};

export default DashBoard;
