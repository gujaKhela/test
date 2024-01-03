import React from "react";
import PlusSign from "../assets/plus_sign.png";


const AddTaskButton = ({ onClick }) => {
  return (
    <div className="w-[266px] h-[236px] bg-[#C4DCD3] hover:bg-[#18cd99] flex justify-center rounded-lg absolute left-[420px] top-36">
      <button onClick={onClick}>
        <p className="my-8 text-center text-2xl text-[#34574A]">add a task</p>
        <img src={PlusSign} alt="plus sign img" className="my-8 mx-auto" />
      </button>
    </div>
  );
};

export default AddTaskButton;
