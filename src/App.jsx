import React from "react";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import '@fontsource/roboto';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MainLayout />
    </div>
  );
}

export default App;
