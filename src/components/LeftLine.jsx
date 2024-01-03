import React from "react";
import { Link } from 'react-router-dom';
import Icon from "../assets/Icon.png";
import Todo from "../assets/TO-DO.png";
import Tasks from "../assets/tasks.png";
import Importnat from "../assets/important.png";
import Completed from "../assets/completed.png";

const LeftLine = () => {
  return (
    <div className="w-[380px] h-screen bg-[#DBEADD] ">
      <div className="w-[300px] flex place-content-around py-8">
        <img src={Icon} alt="icon" />
        <img src={Todo} alt="Todo" />
      </div>

      <div className="w-full bg-[#C4DCD3]">
        <div className="flex items-center  m-5 py-2">
          <img src={Tasks} alt="task-icon" className="w-6 h-6 object-cover" />
          <p className="px-5">tasks</p>
        </div>
      </div>

      <div className="w-full bg-[#C4DCD3]">
        <div className="flex items-center  m-5 py-2">
          <img
            src={Importnat}
            alt="Important-icon"
            className="w-6 h-6 object-cover"
          />
          <p className="px-5">important</p>
        </div>
      </div>

      <Link to="/completed" className="w-[380px] bg-[#C4DCD3] block">
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
