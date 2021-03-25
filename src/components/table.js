import React from "react";
import Table from "react-bootstrap/Table";

function BigTable() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Project #</th>
          <th>Goals</th>
          <th>Repo/Link</th>
          <th>Difficulty</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>This website</td>
          <td>
            <a href="https://fifty-hundred.vercel.app/">Vercel Deployed</a>
          </td>
          <td>Very Easy</td>

          <td>
            <a href="#ass1">Could have been worse</a>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Pagination</td>
          <td>
            <a href="https://pagination-sand.vercel.app/!#">Paginate</a>/
            <a href="https://github.com/clew-bot/pagination">Repo</a>
          </td>
          <td>Easy</td>
          <td>
            <a href="#slice">All about the slice</a>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2"></td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BigTable;
