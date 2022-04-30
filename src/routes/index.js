import { Routes, Route } from "react-router-dom";
import UserProfile from "../pages/UserProfile";
import Hangman from "../pages/Hangman";
import Quiz from "../pages/Quiz";
import Games from "../pages/Games";

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/">

      </Route>
      <Route exact path="/login">

      </Route>
      <Route exact path="/profile" element={<UserProfile />} />

      <Route exact path="/games" element={<Games />} />

      <Route exact path="/games/hangman" element={<Hangman />} />


      <Route exact path="/games/quiz" element={<Quiz />} />


    </Routes>
  )
}

export default MainRoutes;