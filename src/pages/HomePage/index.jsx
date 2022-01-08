import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const HomePage = () => {
  const { authentecated, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <h1>Home page</h1>
      <p>{String(authentecated)}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default HomePage;
