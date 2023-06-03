import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    axios
      .post(Endpoints.LOGIN_URL, values)
      .then(
        (response) => {
          // console.log(response.data);
          setRequestResponse({
            textMessage: "Login successful.Thank you",
            alertClass: "alert alert-success",
          });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
        },
        (error) => {
          //console.log(error.response.data.message);
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email must be a valid email"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be atleast 6 characters"),
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div class={requestResponse.alertClass} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2 className="heading">Login</h2>
            <hr />
            <div className="main-container">
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                {(formik) => {
                  return (
                    <Form>
                      <div className="form-group">
                        <Field
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          className={
                            formik.touched.email && formik.errors.email
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                        <ErrorMessage name="email">
                          {(errorMessage) => (
                            <small className="text-danger">
                              {errorMessage}
                            </small>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <Field
                          type="password"
                          placeholder="Password"
                          name="password"
                          className={
                            formik.touched.password && formik.errors.password
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                        <ErrorMessage name="password">
                          {(errorMessage) => (
                            <small className="text-danger">
                              {errorMessage}
                            </small>
                          )}
                        </ErrorMessage>
                      </div>
                      <Link className="nav-link" to="/">
                        <Field
                          type="submit"
                          value="Login"
                          className="btn btn-primary btn-block"
                        />
                      </Link>
                    </Form>
                  );
                }}
              </Formik>
              <br />
              <p className="text-center">
                Don't have an account?Sign up<a href="/register"> here.</a>
              </p>
            </div>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
