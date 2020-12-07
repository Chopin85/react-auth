import React, { useContext } from "react";
import { firebaseAuth } from "./provider/AuthProvider";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";

function App() {
  const { token } = useContext(firebaseAuth);

  return (
    <>
      {/* switch allows switching which components render.  */}
      <Switch>
        {/* route allows you to render by url path */}
        <Route
          exact
          path="/"
          render={(rProps) => (token === null ? <Signin /> : <Home />)}
        />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

export default App;
