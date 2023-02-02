import React, { useState, useRef } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState("password");
  const [errorInput] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <div className="wrapper">
      <Link to="/" className="Logo_content">
        <img
          src="./src/assets/ChemicalD-Logo.svg"
          alt="ChemicalDreams Logo"
          className="logo_login"
        />
      </Link>
      <h1 className="login_space">Login</h1>
      <form
        className="form_login"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <input
            type="email"
            className="username"
            name="email"
            placeholder="Email"
            ref={emailRef}
          />
        </div>
        <div className="password_box">
          {showPassword === "password" ? (
            <AiFillEye
              className="icon"
              onClick={() => {
                setShowPassword("text");
              }}
            />
          ) : (
            <AiFillEyeInvisible
              className="icon"
              onClick={() => {
                setShowPassword("password");
              }}
            />
          )}
          <input
            type={showPassword}
            className="password"
            name="password"
            minLength="8"
            required
            placeholder="Mot de passe"
            ref={passwordRef}
          />
        </div>

        <input type="submit" value="Connexion" className="sign_in" />
        {errorInput && <p className="error">Email ou mot de passe incorrect</p>}
      </form>
      <Link to="/register">
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="register">Créer un compte</button>
      </Link>
    </div>
  );
}
