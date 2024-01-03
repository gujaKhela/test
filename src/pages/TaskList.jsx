import React from "react";
import HeaderLine from "../components/HeaderLine";
import Star from "../assets/Star_1.png";
import LeftLine from "../components/LeftLine";

export const TaskList = () => {
  return (
    <>
      <div className="flex">
        <LeftLine />
        <HeaderLine hasImage={true} />
      </div>
    </>
  );
};
