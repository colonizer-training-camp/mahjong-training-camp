import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./History/History";
import Home from "./Home/Home";
import Stats from "./Stats/Stats";
import UserStats from "./Stats/UserStats";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats">
          <Route path="" element={<Stats />} />
          <Route path=":handle" element={<UserStats />} />
        </Route>
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
