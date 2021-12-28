import React, { useEffect } from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
//import SignIn from "./SignIn";
import style from "./LoginPage.module.css";
import DashBoard from "./DashBoard";
import { loginRequest } from "../msalConfig";

const LoginPage = (props) => {
  const { accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated, accounts[0]);
  const { instance } = useMsal();
  useEffect(() => {
    instance
      .loginRedirect(loginRequest)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <div className={style.loginPageConatiner}>
      {isAuthenticated ? <DashBoard /> : null}
    </div>
  );
};

export default LoginPage;
