import React from "react";
import LeftLine from "../components/LeftLine";
import HeaderLine from "../components/HeaderLine";

const AddTask = () => {
  const completedTasksString = localStorage.getItem("completedTasks");
  const completedTasks = JSON.parse(completedTasksString) || [];

  console.log("completedTasks on ", completedTasks);

  return (
    <>
      <div className="flex">
        <LeftLine />
        <HeaderLine has_text={true} textContent="Completed Tasks" />
      </div>
      {completedTasks.length ? (
        <div className="absolute left-[420px] top-[26rem]">
          <ul>
            <p className="text-center text-xl font-semibold text-[#34574A]">
              Completed Tasklist:
            </p>
            {completedTasks.map((completedTask) => (
              <li
                className="my-2 py-2 flex items-center line-through"
                key={completedTask.id}
              >
                <span>
                  <div className="font-semibold inline-block line-through">
                    Name
                  </div>{" "}
                  - {completedTask.input}{" "}
                  <span className="ml-4">
                    {" "}
                    <div className="font-semibold inline-block line-through">
                      Date
                    </div>{" "}
                    - {completedTask.date}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="absolute left-[420px] top-[26rem]">
          <p className="text-center text-xl font-semibold">
            Please complite some task first
          </p>
        </div>
      )}
    </>
  );
};

export default AddTask;
