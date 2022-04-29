import { Switch, Route } from "react-router-dom";
// import UserProfile from "../pages/UserProfile";
import MeusVouchers from "../pages/MeusVouchers";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/login"></Route>
      <Route exact path="/profile">
        {/* <UserProfile /> */}
        <MeusVouchers />
      </Route>
    </Switch>
  );
};

export default Routes;
