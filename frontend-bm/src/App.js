import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import OwnerDashboard from "./pages/OwnerDashboard";
import UserManagement from "./pages/UserManagement";
import AccountManagement from "./pages/AccountManagement";
import BranchManagement from "./pages/BranchManagement";
import ProductManagement from "./pages/ProductManagement";
import Inventory from "./pages/Inventory";
import POS from "./pages/POS";
import CustomerManagement from "./pages/CustomerManagement";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
import Layout from "./components/Sidebar";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OwnerDashboard />} />
          <Route path="owner-dashboard" element={<OwnerDashboard />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="account-management" element={<AccountManagement />} />
          <Route path="branch-management" element={<BranchManagement />} />
          <Route path="product-management" element={<ProductManagement />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="pos" element={<POS />} />
          <Route path="customer" element={<CustomerManagement />} />
          <Route path="finance" element={<Finance />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
