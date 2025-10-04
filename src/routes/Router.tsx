import PageHome from "../Pages/PageHome/PageHome";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ForBusiness from "../Pages/ForBusiness/ForBusiness";
import MyCareer from "../Pages/MyCareer/MyCareer";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mycareer" element={<MyCareer />} />
        <Route path="/forbusiness" element={<ForBusiness />} />
      </Routes>
  );
};

export default AppRoutes;
