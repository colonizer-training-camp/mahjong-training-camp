import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Stats from "./Stats";

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
