import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
