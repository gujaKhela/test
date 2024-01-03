import { Routes, Route } from "react-router-dom";
import AddTask from "../pages/AddTask";
import Completed from "../pages/Completed";
import Important from "../pages/Important";

import React from "react";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddTask />} />
      <Route path="completed" element={<Completed />} />
      <Route path="important" element={<Important />} />
    </Routes>
  );
};

export default AllRoutes;
