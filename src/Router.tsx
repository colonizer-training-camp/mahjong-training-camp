import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Stats from "./Stats/Stats";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
