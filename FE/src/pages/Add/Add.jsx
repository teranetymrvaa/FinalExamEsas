import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
function Add() {
  const url = "http://localhost:3000/clothing/";
  async function postData(value) {
    const res = await axios.post(url, value);
    const data = res.data;
  }
  return (
    <div style={{ marginTop: "80px" }} className="container">
      <title>Admin Add</title>
      <h1 style={{ marginBottom: "10px" }}>Data Elave Edin </h1>
      <Formik
        initialValues={{ name: "", price: "", img: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          price: Yup.string().required("Required"),
          img: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          postData(values);
          setSubmitting("");
        }}
      >
        <Form>
          <label htmlFor="name"> Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="text" />
          <ErrorMessage name="price" />

          <label htmlFor="img">img Address</label>
          <Field name="img" type="text" />
          <ErrorMessage name="img" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Add;
