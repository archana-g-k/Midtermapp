import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Endpoints from "../api/Endpoints";

const RegisterPage = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    axios
      .post(Endpoints.REGISTER_URL, values)
      .then(
        (response) => {
          console.log(response);
          setRequestResponse({
            textMessage: "Successfully registered",
            alertClass: "alert alert-success",
          });
        },
        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("last name is required"),
    email: Yup.string()
      .required("email is required")
      .email("email must be a valid email"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be atleast 6 characters"),
    cpassword: Yup.string()
      .required("confirm password is required")
      .min(6, "confirm password must be atleast 6 characters")
      .oneOf([Yup.ref("password"), null], "password must match"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validationOnMount: true,
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

            <h2 className="heading">Sign Up</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="firstName"
                  values={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  className={
                    formik.touched.lastName && formik.errors.lastName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="lastName"
                  values={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <small className="text-danger">
                    {formik.errors.lastName}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="email"
                  values={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="password"
                  values={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password
                  Confirm"
                  className={
                    formik.touched.cpassword && formik.errors.cpassword
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="cpassword"
                  values={formik.values.cpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.cpassword && formik.errors.cpassword ? (
                  <small className="text-danger">
                    {formik.errors.cpassword}
                  </small>
                ) : null}
              </div>
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
              Already have an account?<a href="/login">Login here.</a>
            </p>
          </div>
        </div>

        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;
