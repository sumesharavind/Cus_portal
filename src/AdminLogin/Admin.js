import React, { useState } from "react";
import "./Admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";

const Admin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (value) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(value)) {
      setPasswordError("Password must be at least 6 characters long, contain at least one uppercase letter, and one special character.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    validateEmail(email);
    validatePassword(password);
  };

  return (
    <div className="main">
      <div className="submain">
        <div className="firstGrid">
          <img src="./Images/logoimage.jpg" alt="Login" className="Login-img" />
        </div>
        <div className="secondGrid">
          <div className="form-wrapper">
            <img src="./Images/Savic.png" alt="Logo" className="Logo" />
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  id="input-box"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  required
                />
                {emailError && (
                  <Form.Text className="text-danger">
                    {emailError}
                  </Form.Text>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  required
                />
                {passwordError && (
                  <Form.Text className="text-danger">
                    {passwordError}
                  </Form.Text>
                )}
              </FloatingLabel>
              <div className="d-flex justify-content-end mb-3 text-end">
                <a
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"} Password
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  className="btn-md custom-bold"
                  style={{ fontWeight: "600" }}
                  type="submit"
                >
                  Log In
                </Button>
              </div>
            </Form>
            <br />
            {/* <div className="bold-span-wrapper">
              <span style={{ fontWeight: "bold" }}>
                Don't have an account? <span style={{ color: "#0d6efd" }}>Sign up</span>
              </span>{" "}
            </div> */}
            <div className="copyright">
              <p>&copy; SAVIC {new Date().getFullYear()} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
