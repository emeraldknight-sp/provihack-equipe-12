import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import UserProfile from "../pages/UserProfile";
import FriendProduct from "../pages/FriendProduct";
import ReviewProduct from "../pages/ReviewProduct";
import GreenSeal from "../pages/GreenSeal";

import Hangman from "../pages/Hangman";
import Quiz from "../pages/Quiz";
import Games from "../pages/Games";
import Partners from "../pages/Partners";
import MyVouchers from "../pages/MyVouchers";
import Score from "../pages/Score";
import List from "../pages/List";

const MainRoutes = () => {
  return (
    <Routes>

      <Route exact path="/" element={<Login />} />

      <Route exact path="/signup" element={<Signup />} />

      <Route exact path="/profile" element={<UserProfile />} />

      <Route exact path="/information" element={<GreenSeal />} />

      <Route path='/friend-product' element={<FriendProduct />} />

      <Route path='/review-product' element={<ReviewProduct />} />

      <Route exact path="/games" element={<Games />} />

      <Route exact path="/games/hangman" element={<Hangman />} />

      <Route exact path="/games/quiz" element={<Quiz />} />

      <Route exact path="/partners" element={<Partners />} />

      <Route exact path="/vouchers" element={<MyVouchers />} />

      <Route exact path="/score" element={<Score />} />

      <Route exact path="/list" element={<List />} />

    </Routes>
  )
}

export default MainRoutes;
