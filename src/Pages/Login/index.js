import React, { useState } from "react";
import { Button, Input, Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import validationSchema from "../../validationSchema";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const mockUsers = JSON.parse(sessionStorage.getItem("mockUsers"));
      const user = mockUsers.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (user) {
        message.success("Logged in successfully");
        setLoggedIn(true); // Set loggedIn state to true upon successful login
      } else {
        message.error("Invalid email or password");
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });

        // Loop through validationErrors and display error messages
        Object.keys(validationErrors).forEach((key) => {
          message.error(validationErrors[key]);
        });

        // ... (handle validation errors)
      } else {
        // Handle other types of errors (not Yup validation errors)
        console.error("Unexpected error:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Redirect to Home component if loggedIn state is true
  if (loggedIn) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="my-5 gradient-form">
      <Row justify="center">
        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
          <div className="d-flex flex-column ms-5 me-5">
            <div className="text-center">
              <img
                src="https://news.utexas.edu/wp-content/uploads/2020/08/iStock-1212542267.jpg"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">Covid Tracker</h4>
            </div>
            <p>Please login to your account</p>
            <Input
              name="email"
              prefix={<UserOutlined />}
              className="mb-4"
              placeholder="Email address"
              onChange={handleInputChange}
            />
            <Input
              name="password"
              prefix={<LockOutlined />}
              className="mb-4"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
            <div className="text-center pt-1 mb-5 pb-1">
              <Button
                onClick={handleSubmit}
                type="primary"
                className="mb-4 w-100 gradient-custom-2"
              >
                Sign in
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">COVID-19 tracker</h4>
              <p className="small mb-0">
                Stay informed with our COVID-19 tracker. Real-time data,
                updates, and statistics at your fingertips. Stay safe!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
