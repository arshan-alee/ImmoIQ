import React from "react";
import Document from "./Document";
import Footer from "./Footer";

const Content = () => {
  return (
    <div className="w-3/4 h-screen flex flex-col mx-auto">
      <div className="bg-primary p-8 rounded-t-lg mb-8 text-white flex justify-between items-center">
        <div>
          <div className="text-2xl font-semibold">
            Beginnen Sie Ihre Verkaufsreise 👋
          </div>
          <p className="leading-10">
            Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.
          </p>
        </div>
        <div className="mr-4 px-4 flex flex-col gap-1">
          <img src="/question-mark.svg" alt="reload" className="h-6" />
          <p>Reload</p>
        </div>
      </div>

      <div className="w-full mx-auto flex-1 overflow-y-scroll">
      {[...Array(20)].map((_, index) => (
          <div key={index} ><Document /></div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Content;
