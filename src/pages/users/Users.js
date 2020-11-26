import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await data.json();

      setUsers(jsonData);
    };
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div>{user}</div>
      ))}
    </div>
  );
}

export default Users;
