import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../msalConfig";

function handleLogin(instance) {
  instance
    .loginRedirect(loginRequest)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
const SignIn = () => {
  const { instance } = useMsal();

  return (
    <button
      style={{
        border: "0px",
        color: "white",
        backgroundColor: "black",
        fontSize: "30px",
        fontWeight: "bold",
        padding: "10px",
        width: "200px",
        borderRadius: "15px",
        opacity: "0.7",
      }}
      onClick={() => handleLogin(instance)}>
      Sign in{" "}
    </button>
  );
};

export default SignIn;
