import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../assets/Icon.png";
import Todo from "../assets/TO-DO.png";
import Tasks from "../assets/tasks.png";
import Importnat from "../assets/important.png";
import Completed from "../assets/completed.png";

const LeftLine = () => {
  const location = useLocation();

  const isCompletedPage = location.pathname === "/completed";
  const isImportantPage = location.pathname === "/important";
  const isTasksPage = location.pathname === "/"

  return (
    <div className="w-[380px] h-screen bg-[#DBEADD] ">
      <div className="w-[300px] flex place-content-around py-8">
        <img src={Icon} alt="icon" />
        <img src={Todo} alt="Todo" />
      </div>

      <Link to="/" className={`w-[380px] ${
          isTasksPage ? "bg-[#D9D9D9]" : "bg-[#C4DCD3]"
        } block`}>
        <div className="flex items-center  m-5 py-2">
          <img src={Tasks} alt="task-icon" className="w-6 h-6 object-cover" />
          <p className="px-5">tasks</p>
        </div>
      </Link>

      <Link to="/important" className={`w-[380px] ${
          isImportantPage ? "bg-[#D9D9D9]" : "bg-[#C4DCD3]"
        } block`}>
        <div className="flex items-center  m-5 py-2">
          <img
            src={Importnat}
            alt="Important-icon"
            className="w-6 h-6 object-cover"
          />
          <p className="px-5">important</p>
        </div>
      </Link>

      <Link
        to="/completed"
        className={`w-[380px] ${
          isCompletedPage ? "bg-[#D9D9D9]" : "bg-[#C4DCD3]"
        } block`}
      >
        <div className="flex items-center m-5 py-2">
          <img
            src={Completed}
            alt="Completed-icon"
            className="w-6 h-6 object-cover"
          />
          <p className="px-5">completed</p>
        </div>
      </Link>
    </div>
  );
};

export default LeftLine;
