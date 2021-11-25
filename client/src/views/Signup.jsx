import React from "react";
import {useState} from "react";
import  Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Signup() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function validateForm() {
        return email.length > 0 && password.length > 0;
      }
    
    function handleSubmit(event) {
        console.log("Email: " + email + "Password:" + password + "Confirm:" + confirm);
        event.preventDefault();
        handleClose();
    }

    return (
      <div className>
        <Button variant="primary" className = "btn" onClick={handleShow}>
          Sign Up
        </Button> 
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <label className = "labelLogin">Sign up </label>
          <div className>
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
                <Form.Group controlId="confirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="confirm"
                    value={confirm}
                    size="sm"
                    onChange={(e) => setConfirm(e.target.value)}
                />
                </Form.Group>
            </Form>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" disabled={!validateForm()} onClick={handleSubmit}>
              Create Account
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

