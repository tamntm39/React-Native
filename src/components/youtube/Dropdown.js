import React, { useEffect, useState, useRef } from "react";
// import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
const [showDropdown, setShowDropdown] = useState(false);
const DropdownRef = useRef(null);
useEffect(() => {
    function handleClickOutDropdown(e) {
        if(DropdownRef.current && !DropdownRef.current.contains(e.target)) {
            setShowDropdown(false);
        }
        else {
            console.log("click inside dropdown");
        }
    }
    document.addEventListener("click", handleClickOutDropdown);
    return () => {
        document.removeEventListener("click", handleClickOutDropdown);
    };
},[]);
  return (
    <div className="relative w-full max-w-[400px]" ref={DropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected
      </div>
      {showDropdown && (
        <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
