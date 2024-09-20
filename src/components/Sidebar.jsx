import React, { useState } from "react";
import SidebarTab from "./SidebarTab";
import Profile from "./Profile";
import Rating from "./Rating";

export default function Sidebar() {
  const [selectedTab, setSelectedTab] = useState(null);

  const tabs = [
    {
      id: 1,
      title: "Immobilienlexikon",
      description: "Immobilienwissen für alle Fälle",
      image: "/city.svg",
      buttonText: "KI",
    },
    {
      id: 2,
      title: "Preisschätzung",
      description: "Den Wert Ihres Hauses schätzen lassen.",
      image: "/elevator.svg",
      buttonText: "LINK",
    },
    {
      id: 3,
      title: "Checklisten",
      description: "Praktische Checklisten für jeden Schritt.",
      image: "/clipboard-check.svg",
      buttonText: "PDF",
    },
    {
      id: 4,
      title: "Ratgeber",
      description: "Immobilien-Expertenrat für Eigentümer.",
      image: "/ecology-book.svg",
      buttonText: "PDF",
    },
    {
      id: 5,
      title: "Mandatsnavigator",
      description: "Zum Traumheim mit KI-Unterstützung.",
      image: "/compass.svg",
      buttonText: "KI",
    },
    {
      id: 6,
      title: "Wohntraumfinder",
      description: "Zum Traumheim mit KI-Unterstützung.",
      image: "/golf.svg",
      buttonText: "KI",
    },
  ];

  return (
    <div className="w-1/4 bg-white p-4 shadow-lg flex flex-col mt-11">
      <div className="flex justify-end items-center ">
        <div className="flex gap-1">
          <img src="/tools.svg" alt="mode" />
          <div className="rounded-xl bg-lightBlue px-3 py-1 text-secondary text-xs">
            NACHTMODUS
          </div>
        </div>
      </div>
      <img src="/Immo-Logo-blue.svg" alt="logo" className="h-16 my-6" />
      <div>
        {tabs.map((tab) => (
          <SidebarTab
            key={tab.id}
            title={tab.title}
            description={tab.description}
            image={
              selectedTab === tab.id
                ? tab.image.replace(".svg", "-white.svg")
                : tab.image
            }
            buttonText={tab.buttonText}
            isSelected={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
          />
        ))}
      </div>
      <Profile />
      <Rating/>
    </div>
  );
}
