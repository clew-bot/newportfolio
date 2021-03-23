import React from "react";
import Table from "react-bootstrap/Table";

function BigTable() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Project #</th>
          <th>Accomplished</th>
          <th>Repo</th>
          <th>Difficulty</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>This website</td>
          <td>Otto</td>
          <td>Very Easy</td>
          <a href="#ass1">
            <td>Could have been worse</td>
          </a>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BigTable;
