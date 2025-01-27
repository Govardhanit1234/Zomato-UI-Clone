import { Box } from "@mui/material";
import React from "react";
import Register from "../auth/Register";
import Login from "../auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apps from "../App/Apps";

function LandingPage() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Apps />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default LandingPage;