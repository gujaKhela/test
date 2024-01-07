import React from "react";
import LeftLine from "../components/LeftLine";
import HeaderLine from "../components/HeaderLine";
import importantStar from "../assets/importantGreen.png";
import AddTaskComponent from "../components/AddTaskComponent";

const AddTask = () => {
  const importantTasksString = localStorage.getItem("importantTasks");
  const importantTasks = JSON.parse(importantTasksString) || [];

  return (
    <>
      <div className="flex">
        <LeftLine />
        <HeaderLine has_text={true} textContent="Imporatnt Tasks" />
      </div>
      {importantTasks.length ? (
        <div className="absolute left-[420px] top-[12rem]">
          <ul>
            <div className="flex">
              <p className="text-center text-xl font-semibold text-[#34574A]">
                Important Tasklist:
              </p>
              <img src={importantStar} alt="important Star" className="ml-4" />
            </div>
            {importantTasks.map((importantTask) => (
              <li
                className="my-2 py-2 flex items-center "
                key={importantTask.id}
              >
                <div className="">
                  <span className="font-semibold inline">Name - </span>
                  {importantTask.input}{" "}
                  <span className="font-semibold inline">Date -</span>
                  {importantTask.date}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="absolute left-[420px] top-[26rem]">
          <p className="text-center text-xl font-semibold">
            Please add some task first to important
          </p>
        </div>
      )}
    </>
  );
};

export default AddTask;
