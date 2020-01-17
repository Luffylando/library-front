import React, { Component } from "react";
import ContactStyle from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Formik } from "formik";
import axios from "axios";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <ContactStyle>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: ""
            }}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("message", values);
              try {
                let data = {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  message: values.message
                };
                await axios.post(
                  "http://localhost:4000/contact/formMessage",
                  data
                );

                values.firstName = "";
                values.lastName = "";
                values.email = "";
                values.message = "";
              } catch (err) {
                console.log("error", err);
              }
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <h1> Contact us </h1>
                  <div className="row">
                    <div className="inputDiv">
                      <label>First Name</label>
                      <input
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      <div className="error">
                        {errors.firstName &&
                          touched.firstName &&
                          errors.firstName}
                      </div>
                    </div>
                    <div className="inputDiv">
                      <label>Last Name</label>
                      <input
                        placeholder="Last Name"
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                      <div className="error">
                        {errors.lastName && touched.lastName && errors.lastName}
                      </div>
                    </div>
                  </div>
                  <div className="inputDiv">
                    <label>Email</label>
                    <input
                      placeholder="Your Email"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <div className="error">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>
                  <div className="inputDiv">
                    <label>Message:</label>
                    <textarea
                      type="text"
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      placeholder="Message"
                    >
                      :
                    </textarea>
                    <div className="error">
                      {errors.message && touched.message && errors.message}
                    </div>
                  </div>
                  <div className="submitBtn">
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </div>
                </form>
                <div className="contactInfo">
                  <h1>Connect with us:</h1>
                  <p>For support or any questions:</p>
                  <p>Email us at support@example.com</p>

                  <p className="headline">Luffy's Library</p>
                  <p>Address Name ...</p>
                  <p>Address Name ...</p>
                  <p>Address Name ...</p>
                </div>
              </>
            )}
          </Formik>
        </ContactStyle>
        <Footer />
      </>
    );
  }
}
