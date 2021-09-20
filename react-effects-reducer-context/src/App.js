import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  // useEffect(() => {
  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
    // <AuthContext.Provider value={{
    //   isLoggedIn:isLoggedIn,
    //   onLogout:logoutHandler
    // }}>
    // <MainHeader onLogout={logoutHandler} />
    // <main>
    //   {!isLoggedIn && <Login onLogin={loginHandler} />}
    //   {isLoggedIn && <Home onLogout={logoutHandler} />}
    // </main>
    // </AuthContext.Provider>

    //   <React.Fragment>
    //   <AuthContext.Provider>
    //   <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
    //   <main>
    //     {!isLoggedIn && <Login onLogin={loginHandler} />}
    //     {isLoggedIn && <Home onLogout={logoutHandler} />}
    //   </main>
    //   </AuthContext.Provider>
    // </React.Fragment>
  );
}

export default App;
