import React from "react"
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import { useState } from "react";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="auth-page-passport-shape">
        <h1>PASSPORT</h1>

        {showForm ? (
        <>
          <LogInForm setUser={setUser} />
          <p>
          Need to make an account? <br></br>Sign up {" "}
          <span className="login-anchor" onClick={() => setShowForm(!showForm)}>
            <a href="#">here</a>
          </span>
        </p>
        </>
        ) : (
        <>
          <SignUpForm setUser={setUser} />
          <p>
          Already have an account? {" "}
          <span className="login-anchor" onClick={() => setShowForm(!showForm)}>
            <a href="#">Login</a>
          </span>
        </p>
        </>
        )}
      </div>
    </>
  );
}
