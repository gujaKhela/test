import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import AddTaskButton from "./AddTaskButton";
import UseLocalStorage from "./UseLocalStorage";
import TaskList from "./TaskList";

const AddTaskComponent = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [tasks, setTasks] = UseLocalStorage("tasks", []);
  const [task, setTask] = useState({ input: "", date: "" });

  const addTaskInput = () => {
    setInputVisible(true);
  };

  const generateUniqueId = () => {
    return new Date().getTime().toString();
  };

  const updateTasks = (newTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks,{...newTask,id:generateUniqueId()} ];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.input && task.date) {
      const newTask = { ...task };
      updateTasks(newTask);

      setInputVisible(false);
      setTask({ input: "", date: "" });
    }
  };

  console.log(tasks);
  return (
    <>
      <AddTaskButton onClick={addTaskInput} />

      {isInputVisible && (
        <TaskForm
          onSubmit={handleSubmit}
          task={task}
          onInputChange={(e) => setTask({ ...task, input: e.target.value })}
          onDateChange={(e) => setTask({ ...task, date: e.target.value })}
        />
      )}
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default AddTaskComponent;
