import React, { useState } from "react";
import "./loginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FloatingLabel } from "react-bootstrap";
 
const LoginPage = () => {
  const [isResetPass, setIsResetPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
 
  const handleResetPassClick = () => {
    setIsResetPass(true);
  };
 
  const handleSignInClick = () => {
    setIsResetPass(false);
  };
 
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
      setPasswordError(
        "Password must be at least 6 characters long, contain at least one uppercase letter, and one special character."
      );
    } else {
      setPasswordError("");
    }
  };
 
  const validateNewPassword = (value) => {
    if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(value)) {
      setNewPasswordError(
        "New password must be at least 6 characters long, contain at least one uppercase letter, and one special character."
      );
    } else {
      setNewPasswordError("");
    }
  };
 
  const validateConfirmPassword = (value) => {
    if (isResetPass && newPassword !== value) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Clear all errors
    setEmailError("");
    setPasswordError("");
    setNewPasswordError("");
    setConfirmPasswordError("");
 
    validateEmail(email); // Email validation
    validatePassword(password); // Password validation
    validateNewPassword(newPassword); // New password validation
    validateConfirmPassword(confirmPassword); // Confirm password validation
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
              {!isResetPass && (
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
                    <Form.Text className="text-danger">{emailError}</Form.Text>
                  )}
                </FloatingLabel>
              )}
              <FloatingLabel
                controlId="floatingPassword"
                label={isResetPass ? "Current Password":"Password"}
                className="mb-3"
              >
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  required
                />
                {passwordError && (
                  <Form.Text className="text-danger">{passwordError}</Form.Text>
                )}
              </FloatingLabel>
              {isResetPass && (
                <>
                  <FloatingLabel
                    controlId="floatingNewPassword"
                    label="New Password"
                    className="mb-3"
                  >
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                        validateNewPassword(e.target.value);
                      }}
                      required
                    />
                    {newPasswordError && (
                      <Form.Text className="text-danger">
                        {newPasswordError}
                      </Form.Text>
                    )}
                  </FloatingLabel>
 
                  <FloatingLabel
                    controlId="floatingConfirmPassword"
                    label="Confirm Password"
                    className="mb-3"
                  >
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        validateConfirmPassword(e.target.value);
                      }}
                      required
                    />
                    {confirmPasswordError && (
                      <Form.Text className="text-danger">
                        {confirmPasswordError}
                      </Form.Text>
                    )}
                  </FloatingLabel>
                </>
              )}
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
                  {isResetPass ? "Save" : "Log in"}
                </Button>
              </div>
            </Form>
            <br />
            <div className="bold-span-wrapper">
              <span style={{ fontWeight: "bold" }}>
                {isResetPass ? "Click here to: " : "Reset Password ? "}
                <span
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={isResetPass ? handleSignInClick : handleResetPassClick}
                >
                  {isResetPass ? "Sign in" : "Click here"}
                </span>
              </span>{" "}
            </div>
            <div className="copyright">
              <p>&copy; SAVIC {new Date().getFullYear()} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default LoginPage;
 