import { Routes, Route, HashRouter } from "react-router-dom";
import PageHome from "../Pages/PageHome/PageHome";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ForBusiness from "../Pages/ForBusiness/ForBusiness";
import MyCareer from "../Pages/MyCareer/MyCareer";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mycareer" element={<MyCareer />} />
        <Route path="/forbusiness" element={<ForBusiness />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
