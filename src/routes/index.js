import { Switch, Route } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import Hangman from "../pages/Hangman";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">

      </Route>
      <Route exact path="/login">

      </Route>
      <Route exact path="/profile">
        <UserProfile />
      </Route>
      <Route exact path="/games/hangman">
        <Hangman />
      </Route>
    </Switch>
  )
}

export default Routes;