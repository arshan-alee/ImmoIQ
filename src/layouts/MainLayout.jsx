import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4">
        <Sidebar />
      </div>
      {/* Content */}
      <div className="w-3/4 p-4">
        <Content />
      </div>
    </div>
  );
};

export default MainLayout;
