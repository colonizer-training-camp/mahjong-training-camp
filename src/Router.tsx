import { BrowserRouter, Route, Routes } from "react-router-dom";
import HistoryPage from "./pages/history/HistoryPage";
import HomePage from "./pages/HomePage";
import UserStatsPage from "./pages/stats/:handle/UserStatsPage";
import LoginPage from "./pages/login/LoginPage";
import StatsPage from "./pages/stats/StatsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stats">
          <Route path="" element={<StatsPage />} />
          <Route path=":handle" element={<UserStatsPage />} />
        </Route>
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
