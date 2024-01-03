import React from "react";
import Star from "../assets/Star_1.png";

export const HeaderLine = ({ has_text = false, textContent = false, hasImage = false }) => {
  return (
    <div className={`flex items-center ${has_text ? 'justify-start' : 'justify-end'} w-full h-[100px] bg-[#D9D9D9] p-4`}>
      
      {hasImage? <img src={Star} alt="settings-icon" className="" />:null}
      
      {has_text ? <p className="text-left">{textContent} </p> : null}
    </div>
  );
};

export default HeaderLine;
