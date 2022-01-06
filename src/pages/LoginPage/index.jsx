import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import "./styles.css";

const LoginPage = () => {
  const { authentecated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSunmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password);
  };
  return (
    <div id="login">
      <h1 className="title">Login do sistema</h1>
      <p>{String(authentecated)}</p>
      <form className="form" onSubmit={handleSunmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
        </div>

        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
        </div>

        <div className="action">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
