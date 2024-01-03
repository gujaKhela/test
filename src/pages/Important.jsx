import React from "react";
import LeftLine from "../components/LeftLine";
import HeaderLine from "../components/HeaderLine";
import AddTaskComponent from "../components/AddTaskComponent";

const AddTask = () => {
  return (
    <>
      <div className="flex">
        <LeftLine />
        <HeaderLine has_text={true} textContent="Imporatnt Tasks" />
      </div>
    </>
  );
};

export default AddTask;
