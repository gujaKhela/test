import React, { useState } from "react";
import Delate from "../assets/completed.png";
import UseLocalStorage from "./UseLocalStorage";
import RedDelate from "../assets/redDelate.png";

const TaskList = ({ tasks, setTasks }) => {
  const [hoveredTask, setHoveredTask] = useState(null);
  const [completedTasks, setCompletedTasks] = UseLocalStorage(
    "completedTasks",
    []
  ); // Assuming you have a different key for completed tasks

  const handleMouseEnter = (taskId) => {
    setHoveredTask(taskId);
  };

  const handleMouseLeave = () => {
    setHoveredTask(null);
  };

  const updateCompleteTasks = (task) => {

    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = [...prevCompletedTasks, { task: task }];
      localStorage.setItem(
        "completedTasks",
        JSON.stringify(updatedCompletedTasks)
      );
    
      return updatedCompletedTasks;
    });
  };

  return tasks.length ? (
    <div className="absolute left-[420px] top-[26rem]">
      <ul>
        <p className="text-center text-xl font-semibold text-[#34574A]">
          Your Tasklist:
        </p>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="my-2 py-2 flex items-center"
            onMouseEnter={() => handleMouseEnter(task.id)}
            onMouseLeave={handleMouseLeave}
          >
            <span>
              <div className="font-semibold inline-block">Name</div> -{" "}
              {task.input}{" "}
              <span className="ml-4">
                {" "}
                <div className="font-semibold inline-block">Date</div> -{" "}
                {task.date}
              </span>
            </span>

            <button onClick={() => updateCompleteTasks(task)}>
              <img
                src={hoveredTask === task.id ? RedDelate : Delate}
                alt="delete btn"
                className="ml-4"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="absolute left-[420px] top-[26rem]">
      <p className="text-center text-xl font-semibold">
        Please add some task first
      </p>
    </div>
  );
};

export default TaskList;
