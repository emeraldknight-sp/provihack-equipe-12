import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import UserProfile from "../pages/UserProfile";
import ProductReview from "../pages/ProductReview";
import SeloVerde from "../pages/SeloVerde";

import Hangman from "../pages/Hangman";
import Quiz from "../pages/Quiz";
import Games from "../pages/Games";

const MainRoutes = () => {
  return (
    <Routes>
    
      <Route exact path="/" element={<Login />} />

      <Route exact path="/signup" element={<Signup />} />

      <Route exact path="/profile" element={<UserProfile />} />

      <Route path='/review-product' element={<ProductReview />} />
      
      <Route exact path="/games" element={<Games />} />

      <Route exact path="/games/hangman" element={<Hangman />} />

      <Route exact path="/games/quiz" element={<Quiz />} />
        
      <Route exact path="/green-pass" element={<SeloVerde />} />

    </Routes>
  )
}

export default MainRoutes;
