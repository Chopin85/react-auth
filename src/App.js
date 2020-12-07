import React, { useContext } from "react";
// import { firebaseAuth } from "./provider/AuthProvider";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      {/* switch allows switching which components render.  */}
      <Switch>
        {/* route allows you to render by url path */}
        <Route exact path="/" component={Signup} />
      </Switch>
    </>
  );
}

export default App;
