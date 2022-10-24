import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/users/:username" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
