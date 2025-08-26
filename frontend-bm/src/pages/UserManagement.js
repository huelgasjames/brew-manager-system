import React from "react";
import { Table, Button } from "react-bootstrap";

function UserManagement() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>User Management</h2>
        <Button variant="primary">Add New User</Button>
      </div>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Role</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>owner123</td>
            <td>Owner</td>
            <td>owner@brewmgr.com</td>
            <td>Main Branch</td>
            <td>
              <Button variant="warning" size="sm" className="me-2">Edit</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>cashier01</td>
            <td>Cashier</td>
            <td>cashier@brewmgr.com</td>
            <td>Mamatid</td>
            <td>
              <Button variant="warning" size="sm" className="me-2">Edit</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default UserManagement;
