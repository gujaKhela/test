import React from "react";
import LeftLine from "../components/LeftLine";
import HeaderLine from "../components/HeaderLine";
import AddTaskComponent from "../components/AddTaskComponent";

const AddTask = () => {
  return (
    <>

<div className="flex">

<LeftLine />
<HeaderLine  hasImage={true}/>
</div>
      <AddTaskComponent className=""  />
     
    </>
  );
};

export default AddTask;
