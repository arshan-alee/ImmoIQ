import React, { useState } from "react";

export default function SidebarTab({ title, description, image, buttonText, isSelected, onClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`cursor-pointer text-secondary py-3 px-5 ${isSelected ? 'bg-secondary text-white' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img src={image} alt="tab-image" />
          <h1 className="xl:text-lg lg:text-base font-medium">{title}</h1>
        </div>
        <div className="relative">
          <div
            className="flex items-center ml-10 rounded-xl px-5 py-1 font-semibold lg:text-xss xl:text-xs text-secondary bg-lightBlue cursor-pointer"
            onClick={handleDropdownClick}
          >
            {buttonText}
            {buttonText === "PDF" && (
              <img src="/dropdown.svg" alt="dropdown" className="ml-2" />
            )}
          </div>
          {isDropdownOpen && buttonText === "PDF" && (
            <div className="absolute right-0 mt-2 px-2 bg-white rounded-lg shadow-lg max-h-40 overflow-auto z-50">
              <div className="text-secondary text-sm cursor-pointer hover:bg-gray-100 p-2">PDF</div>
              <div className="text-secondary text-sm cursor-pointer hover:bg-gray-100 p-2">DOC</div>
            </div>
          )}
        </div>
      </div>
      <p className={`xl:text-xs lg:text-xss ml-8 mt-1 ${isSelected ? 'text-white' : 'text-secondary'}`}>{description}</p>
    </div>
  );
}
