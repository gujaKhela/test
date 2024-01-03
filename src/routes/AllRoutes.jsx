import { TaskList } from "../pages/TaskList";
import { SettingTasks } from "../pages/SettingTasks";
import { Routes, Route } from "react-router-dom";
import AddTask from "../pages/AddTask";

import React from "react";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="add" element={<AddTask />} />
    </Routes>
  );
};

export default AllRoutes;
