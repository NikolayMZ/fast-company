import React, { useState } from "react";
import API from "../api";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  const renderPhrase = (number) => {
    if (number > 4 && number < 15) return "человек с тобой тусанет сегодня";
    if (number <= 4) return "человека с тобой тусанет сегодня";
  };

  return (
    <>
      <h2>
        <span
          className={users.length > 0 ? "badge bg-primary" : "badge dg-danger"}
        >
          {users.length + " " + renderPhrase(users.length)}
        </span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((item) => (
                  <span key={item._id} className={"badge m-1 bg-" + item.color}>
                    {item.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
