import React from "react";
import Sidebar from "./components/Sidebar";
import PriorityDashboard from "./components/PriorityDashboard";

export default function App() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <PriorityDashboard />

      </div>

    </div>

  );

}
