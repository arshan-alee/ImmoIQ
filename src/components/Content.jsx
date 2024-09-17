import React from "react";

const Content = () => {
  return (
    <div className="w-3/4 p-8">
      {/* Banner Section */}
      <div className="bg-teal-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold">
          Beginnen Sie Ihre Verkaufsreise <span role="img" aria-label="wave">👋</span>
        </h2>
        <p>Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.</p>
      </div>

      {/* Cards for the documents */}
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/100x100" alt="Document cover" className="float-left mr-4"/>
          <div>
            <h3 className="text-xl font-semibold">Die Immobilie in der Scheidung</h3>
            <p className="text-gray-500">Eine Erbimmobilie kann die familiäre und wirtschaftliche Situation verändern...</p>
            <div className="flex justify-between items-center mt-4">
              <span>52 Seiten</span>
              <button className="bg-teal-600 text-white px-4 py-2 rounded">Download anfordern</button>
            </div>
          </div>
        </div>

        {/* Repeating the same card structure */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/100x100" alt="Document cover" className="float-left mr-4"/>
          <div>
            <h3 className="text-xl font-semibold">Die Immobilie in der Scheidung</h3>
            <p className="text-gray-500">Eine Erbimmobilie kann die familiäre und wirtschaftliche Situation verändern...</p>
            <div className="flex justify-between items-center mt-4">
              <span>52 Seiten</span>
              <button className="bg-teal-600 text-white px-4 py-2 rounded">Download anfordern</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
