import React, { useState, useEffect } from "react";
import Delete from "../assets/completed.png";
import Important from "../assets/important.png";
import ImportantGreen from "../assets/importantGreen.png";
import RedDelete from "../assets/redDelete.png";
import UseLocalStorage from "./UseLocalStorage";

const TaskList = ({ tasks, setTasks }) => {
  const [hoveredTask, setHoveredTask] = useState(null);
  const [hoveredTaskImportant, setHoveredTaskImportant] = useState(null);
  const [completedTasks, setCompletedTasks] = UseLocalStorage(
    "completedTasks",
    []
  );
  const [importantTasks, setImportantTasks] = UseLocalStorage(
    "importantTasks",
    []
  );

  const handleMouseEnterDelete = (taskId) => {
    setHoveredTask(taskId);
  };

  const handleMouseLeaveDelete = () => {
    setHoveredTask(null);
  };

  const handleMouseEnterImportant = (taskId) => {
    setHoveredTaskImportant(taskId);
  };

  const handleMouseLeaveImportant = () => {
    setHoveredTaskImportant(null);
  };

  useEffect(() => {
    // This useEffect runs whenever tasks are updated
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // This useEffect runs whenever completedTasks are updated
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    // This useEffect runs whenever completedTasks are updated
    localStorage.setItem("importantTasks", JSON.stringify(importantTasks));
  }, [importantTasks]);

  const handleDelete = (taskId) => {
    // Update tasks
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((t) => t.id !== taskId);
      return updatedTasks;
    });

    // Update completedTasks
    const deletedTask = tasks.find((t) => t.id === taskId);

    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = [...prevCompletedTasks, deletedTask];

      return updatedCompletedTasks;
    });
  };

  const handleImportant = (taskId) => {
    setTasks((prevTasks) => {
        const updatedTasks = prevTasks.filter((t) => t.id !== taskId);
        return updatedTasks;
      });
    const importantTaskClicked = tasks.find((t)=>t.id ===taskId)
    setImportantTasks((prevImportantTasks)=>{
        const updateImportantTasks = [...prevImportantTasks,importantTaskClicked]
        return updateImportantTasks;
    })
  };

  return tasks.length ? (
    <div className="absolute left-[420px] top-[26rem]">
      <ul>
        <p className="text-center text-xl font-semibold text-[#34574A]">
          Your Tasklist:
        </p>
        {tasks.map((task) => (
          <div key={task.id}>
            <li className="my-2 py-2 flex items-center">
              <span>
                <div className="font-semibold inline-block">Name</div> -{" "}
                {task.input}{" "}
                <span className="ml-4">
                  {" "}
                  <div className="font-semibold inline-block">Date</div> -{" "}
                  {task.date}
                </span>
              </span>
              <button onClick={() => handleDelete(task.id)}>
                <img
                  src={hoveredTask === task.id ? RedDelete : Delete}
                  alt="delete btn"
                  className="ml-4"
                  onMouseEnter={() => handleMouseEnterDelete(task.id)}
                  onMouseLeave={handleMouseLeaveDelete}
                />
              </button>

              <button onClick={() => handleImportant(task.id)} className="ml-4">
                <img
                  src={
                    hoveredTaskImportant === task.id
                      ? ImportantGreen
                      : Important
                  }
                  alt="Important image"
                  onMouseEnter={() => handleMouseEnterImportant(task.id)}
                  onMouseLeave={handleMouseLeaveImportant}
                />
              </button>
            </li>
          </div>
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
