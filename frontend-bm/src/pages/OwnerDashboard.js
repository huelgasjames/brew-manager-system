import React from "react";
import Sidebar from "../components/Sidebar";

function OwnerDashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4" style={{ marginLeft: "220px" }}>
        <h2>Owner Dashboard</h2>
        <p>Welcome, Admin! Here you can manage the entire BrewManager system.</p>
      </div>
    </div>
  );
}

export default OwnerDashboard;
