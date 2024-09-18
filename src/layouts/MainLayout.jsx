import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const MainLayout = () => {
  return (
    <div className="flex py-14 justify-center w-11/12 max-w-screen-xl mx-auto">
        <Sidebar />
        <Content />
    </div>
  );
};

export default MainLayout;
