import React, { useEffect } from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
//import SignIn from "./SignIn";
import style from "./LoginPage.module.css";
import DashBoard from "./DashBoard";
import { loginRequest } from "../msalConfig";

const LoginPage = (props) => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  // console.log("User Account Details");
  // console.log(isAuthenticated, accounts[0]);

  // instance
  //   .acquireTokenSilent({
  //     account: accounts[0],
  //     scopes: ["openid"],
  //   })
  //   .then((res) => {
  //     console.log("refresh token", res);
  //   });
  useEffect(() => {
    instance
      .loginRedirect(loginRequest)
      .then((res) => {
        console.log(" After Login Response", res.data);
      })
      .catch((e) => {
        console.error(" After Login error ", e);
      });
  }, []);
  return (
    <div className={style.loginPageConatiner}>
      {isAuthenticated ? <DashBoard /> : null}
    </div>
  );
};

export default LoginPage;
