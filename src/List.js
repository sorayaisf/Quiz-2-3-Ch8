import React from "react";

export default function List({ data }) {
  console.log(data);
  return (
    <div className="list-group container">
      {data.map((items, index) => {
        return (
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Experience</th>
                  <th scope="col">Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">John Doe</th>
                  <td>john@yahoo.com</td>
                  <td>Great</td>
                  <td>Beginner</td>
                </tr>
                <tr>
                  <th scope="row">Mark Jason</th>
                  <td>mark@yahoo.com</td>
                  <td>Great</td>
                  <td>Pro</td>
                </tr>
              </tbody>
            </table>
            <div>
              <a href="" class="btn btn-sm btn-primary">
                Edit Data
              </a>
              <a href="" class="btn btn-sm btn-danger">
                Delete Data
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
