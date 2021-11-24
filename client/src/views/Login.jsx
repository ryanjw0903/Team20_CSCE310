import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import './Login.css';
import Signup from "./Signup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div class>
      <div class>
        <h2 class="labelLogin">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              size="sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant = "primary" class = "btn" type="submit" disabled={!validateForm()}>
            Login
          </Button>
          <Signup/>
        </Form>
        <h2 class="labelLogin">User History</h2>
          <ul class="Trips">
            <li>Iron Man 3</li>
            <li>Iron Man 2</li>
            <li>The Avengers</li>
          </ul>
      </div>
    </div>
  );
}
