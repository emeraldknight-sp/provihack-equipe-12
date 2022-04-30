import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ProductReview from "../pages/ProductReview";
import UserProfile from "../pages/UserProfile";

const MainRoutes = () => {
  return(
    <Routes>

      <Route path='/review-product' element={<ProductReview />} />
        
    </Routes>
  )
}

export default MainRoutes;