import React, { Component } from "react";
import AddBookStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";
import { Formik } from "formik";

const options = [
  { id: "Romance", title: "Romance" },
  { id: "History", title: "History" },
  { id: "Crime", title: "Crime" },
  { id: "Philosophy", title: "Philosophy" },
  { id: "Belatristics", title: "Belatristics" }
];

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      title: "",
      genre: "Romance",
      image: ""
    };
    this.fileInput = React.createRef();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelect(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    return (
      <>
        <Header />
        <AddBookStyle>
          <Formik
            initialValues={{ author: "", title: "", genre: "", image: "" }}
            // validate={values => {
            //   const errors = {};
            //   if (!values.author) {
            //     errors.author = "Required";
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //   ) {
            //     errors.email = "Invalid email address";
            //   }
            //   return errors;
            // }}
            onSubmit={async (values, { setSubmitting }) => {
              console.log("values", values);
              console.log("eee", this.fileInput.current.files[0].name);

              let img = this.fileInput.current.files[0].name
                ? this.fileInput.current.files[0].name
                : "No image";
              await axios.post("http://localhost:4000/books/add", {
                author: values.author,
                title: values.title,
                genre: values.genre,
                image: img
              });
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
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                />
                {errors.author && touched.author && errors.author}
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {errors.title && touched.title && errors.title}
                <select
                  name="genre"
                  value={values.genre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ display: "block" }}
                >
                  <option value="Romance" label="Romance" />
                  <option value="History" label="History" />
                  <option value="Crime" label="Crime" />
                  <option value="Philosophy" label="Philosophy" />
                  <option value="Belatristics" label="Belatristics" />
                </select>

                {errors.genre && touched.genre && errors.genre}
                <input type="file" name="image" ref={this.fileInput} />
                {errors.image && touched.image && errors.image}

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </AddBookStyle>
        <Footer />
      </>
    );
  }
}

export default AddBook;
