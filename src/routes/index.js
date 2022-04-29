import { Switch, Route } from "react-router-dom";
// import UserProfile from "../pages/UserProfile";
import SeloVerde from "../pages/SeloVerde";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/login"></Route>
      <Route exact path="/profile">
        <SeloVerde />
      </Route>
    </Switch>
  );
};

export default Routes;
