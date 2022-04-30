import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Doit:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
    </Switch>
  );
}

export default Routes;
