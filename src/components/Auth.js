import React, { useContext, useState } from "react";
//import AppContext
import { AppContext } from "../context/UserContext";
//import auth, provider
import { auth, provider } from "../firebase_setup/firbase";
// import signInWithPopup
import { signInWithPopup } from "firebase/auth";
//import Cookies
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Auth = (props) => {
  const { setUser } = useContext(AppContext);
  const { setIsAuth } = props;
  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      const { uid, email, displayName, photoURL } = result.user;
      setUser({ uid, email, displayName, photoURL });
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>Sign in with Google to continue</div>
      <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Auth;
