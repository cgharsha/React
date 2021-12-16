import React from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import SignIn from "./SignIn";
import style from "./LoginPage.module.css";
import DashBoard from "./DashBoard";
const LoginPage = (props) => {
  const { accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated, accounts[0]);

  return (
    <div style={{ display: "flex" }}>
      <div className={style.loginPageConatiner}>
        {isAuthenticated ? (
          <DashBoard />
        ) : (
          <div className={style.signInContainer}>
            <SignIn />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
