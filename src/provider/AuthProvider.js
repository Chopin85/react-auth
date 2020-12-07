import React, { useState } from "react";
import { authMethods } from "../firebase/authmethods";

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleSignup = () => {
    return authMethods.signup(
      inputs.email,
      inputs.password,
      setErrors,
      setToken
    );
  };

  const handleSignin = () => {
    //changed to handleSingin
    console.log("handleSignin!!!!");
    // made signup signin
    console.log(errors, token);
    return authMethods.signin(
      inputs.email,
      inputs.password,
      setErrors,
      setToken
    );
  };

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
  };

  return (
    <firebaseAuth.Provider
      value={{
        //replaced test with handleSignup
        handleSignup,
        handleSignin,
        token,
        inputs,
        setInputs,
        errors,
        handleSignout,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;

export const firebaseAuth = React.createContext();
