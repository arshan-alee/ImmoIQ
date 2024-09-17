import React from "react";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <MainLayout />
    </div>
  );
}

export default App;
