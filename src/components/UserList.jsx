import React from "react";
import { useState, useEffect } from "react";

import UserCard from "./UserCard";

import "./UserList.css";

const UserList = () => {
  const [users, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    setUser(data.results);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="user-list">
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
