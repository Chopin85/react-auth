import firebaseconfig from "./firebaseIndex";
import firebase from "firebase";

export const authMethods = {
  // firebase helper methods go here...
  signup: (email, password, setErrors, setToken) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      //make res asynchronous so that we can make grab the token before saving it.
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        //set token to localStorage
        await localStorage.setItem("token", token);
        //grab token from local storage and set to state.
        setToken(window.localStorage.token);
        console.log(res);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  },
  signin: (email, password) => {},
  signout: (email, password) => {},
};
