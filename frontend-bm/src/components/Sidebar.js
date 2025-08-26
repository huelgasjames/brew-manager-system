// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <div className="d-flex flex-column bg-dark text-white p-3 vh-100" style={{width: "220px"}}>
      <h4 className="mb-4">BrewManager</h4>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/owner-dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/user-management">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/account-management">Accounts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/branch-management">Branches</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/product-management">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/inventory">Inventory</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/pos">POS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/customer">Customers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/finance">Finance</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
