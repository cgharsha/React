import React, { Suspense } from "react";
import { useMsal } from "@azure/msal-react";
import style from "./LoginPage.module.css";

const TableData = React.lazy(() => import("./TableData"));

const DashBoard = () => {
  const { instance, accounts } = useMsal();

  const handleLogout = () => {
    const logoutRequest = {
      account: accounts[0],
      postLogoutRedirectUri: "http://localhost:3000/",
    };
    instance.logoutRedirect(logoutRequest);
  };
  return (
    <div>
      <button className={style.loginDiv} onClick={handleLogout}>
        Logout
      </button>

      <Suspense
        fallback={
          <div
            style={{
              position: "fixed",
              textAlign: "center",
              margin: " 20% auto auto 10%",
            }}>
            Table is Loading in Dashboard...
          </div>
        }>
        <TableData />
      </Suspense>
    </div>
  );
};

export default DashBoard;
