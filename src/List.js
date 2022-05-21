import React from "react";

export default function List({ data, handleDelete }) {
  return (
    <div className="list-group container">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Experience</th>
              <th scope="col">Level</th>
            </tr>
          </thead>
          {data.map((items, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row">{items.username}</th>
                  <td>{items.email}</td>
                  <td>{items.experience}</td>
                  <td>{items.lvl}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
