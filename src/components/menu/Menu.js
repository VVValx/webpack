import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to="/users">Users</Link>
      <Link to="/pizza">Pizza</Link>
    </div>
  );
}

export default Menu;
