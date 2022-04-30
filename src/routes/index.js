import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import ProductReview from "../pages/ProductReview";
import Teste from "../pages/teste";
import UserProfile from "../pages/UserProfile";

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/'>
        
      </Route>
      <Route path='/login'>

      </Route>
      <Route path='/profile'>
        <UserProfile />
      </Route>
      <Route path='/review-product'>
        <ProductReview />
      </Route>
      
      <Route path='/teste'>
        <Teste />
      </Route>

    </Switch>
  )
}

export default Routes;