import React, { useState } from "react";

const Sidebar = () => {
  const [isChecklistOpen, setIsChecklistOpen] = useState(true);

  return (
    <aside className="w-1/4 bg-white p-4 shadow-lg min-h-screen">
      <div className="flex items-center space-x-2 mb-6">
        <div className="bg-teal-600 h-10 w-10"></div>
        <h1 className="text-xl font-bold">ImmoTrust Schweiz AG</h1>
      </div>
      <nav className="space-y-4">
        <button className="block text-left p-2 hover:bg-gray-100">Immobilienlexikon</button>
        <button className="block text-left p-2 hover:bg-gray-100">Preisschätzung</button>
        <button className="block text-left p-2 hover:bg-gray-100" onClick={() => setIsChecklistOpen(!isChecklistOpen)}>
          Checklisten {isChecklistOpen ? "▼" : "►"}
        </button>
        {isChecklistOpen && (
          <div className="ml-4">
            <button className="block text-left p-2 hover:bg-gray-100">Praktische Checklisten</button>
          </div>
        )}
        <button className="block text-left p-2 hover:bg-gray-100">Ratgeber</button>
        <button className="block text-left p-2 hover:bg-gray-100">Mandatsnavigator</button>
        <button className="block text-left p-2 hover:bg-gray-100">Wohntraumfinder</button>
      </nav>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <p className="font-semibold">Immotrust AG</p>
        <p className="text-gray-500">Vertrauensvolle Immobilienberatung seit 2008.</p>
        <p className="mt-4 text-center font-semibold">Carlos Kuik – Eigentümer</p>
      </div>
    </aside>
  );
};

export default Sidebar;
