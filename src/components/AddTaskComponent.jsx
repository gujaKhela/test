import React from "react";
import PlusSign from "../assets/plus_sign.png";

const AddTaskComponent = () => {
  return (
    <div className="w-[266px] h-[236px] bg-[#C4DCD3] flex justify-center rounded-lg absolute left-[420px] top-36">
      <div className="">
        <p className="text-2xl my-8 text-center">add a task</p>
        <img src={PlusSign} alt="plus sign img" className="my-8 mx-auto" />
      </div>
    </div>
  );
};

export default AddTaskComponent;
