import { Switch, Route } from "react-router-dom";
// import UserProfile from "../pages/UserProfile";
import Pontuação from "../pages/Pontuacao";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/login"></Route>
      <Route exact path="/profile">
        {/* <UserProfile /> */}
        <Pontuação />
      </Route>
    </Switch>
  );
};

export default Routes;
