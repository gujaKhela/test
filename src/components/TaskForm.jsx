import React from "react";

const TaskForm = ({ onSubmit, task, onInputChange, onDateChange }) => {
  return (
    <form className="absolute left-[750px] top-36 " onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        className="p-2 rounded-md border border-gray-400 my-6"
        value={task.input || ""}
        onChange={onInputChange}
      />
      <input
        type="date"
        placeholder="Enter date..."
        className="block my-6"
        value={task.date || ""}
        onChange={onDateChange}
      />
      <button
        type="submit"
        className="p-5 bg-[#C4DCD3] border-2 rounded-lg text-[#34574A] hover:bg-[#18cd99] block my-6"
      >
        Add A Task
      </button>
    </form>
  );
};

export default TaskForm;
