import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import UserProfile from "../pages/UserProfile";
import ProductReview from "../pages/ProductReview";
import SeloVerde from "../pages/SeloVerde";

import Hangman from "../pages/Hangman";
import Quiz from "../pages/Quiz";
import Games from "../pages/Games";
import EmpresasParceiras from "../pages/EmpresasParceiras";
import MeusVouchers from "../pages/MeusVouchers";
import Pontuacao from "../pages/Pontuacao";

const MainRoutes = () => {
  return (
    <Routes>
    
      <Route exact path="/" element={<Login />} />

      <Route exact path="/signup" element={<Signup />} />

      <Route exact path="/profile" element={<UserProfile />} />

      <Route exact path="/information" element={<SeloVerde />} />
      
      <Route path='/review' element={<ProductReview />} />
      
      <Route exact path="/games" element={<Games />} />

      <Route exact path="/games/hangman" element={<Hangman />} />

      <Route exact path="/games/quiz" element={<Quiz />} />
      
      <Route exact path="/partners" element={<EmpresasParceiras />} />

      <Route exact path="/vouchers" element={<MeusVouchers />} />
      
      <Route exact path="/score" element={<Pontuacao />} />

    </Routes>
  )
}

export default MainRoutes;
