/*index.jsx*/
import React from "react";
//Functional Component
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h3>Welcome, this is the homepage of Lauri Laakkonen</h3>
      <small>Main Page</small>
      <div>
      <Link to="/users">Show List of Users</Link>
      </div>
    </div>
  );
};;

export default MainPage;
