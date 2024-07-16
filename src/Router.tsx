import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/history/HistoryPage";
import LoginPage from "./pages/login/LoginPage";
import LogoutPage from "./pages/logout/LogoutPage";
import UserStatsPage from "./pages/stats/:handle/UserStatsPage";
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
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
