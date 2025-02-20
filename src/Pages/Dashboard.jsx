import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "../layout/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import ShopNow from "../components/ShopNow";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "64px" }}>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<ShopNow />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
