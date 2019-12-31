import React, { Fragment, useState } from "react";
import AddBookStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from "axios";
import { Formik } from "formik";
import H1 from "../../../ui/H1";

const options = [
  { id: "Romance", name: "Romance" },
  { id: "History", name: "History" },
  { id: "Crime", name: "Crime" },
  { id: "Philosophy", name: "Philosophy" },
  { id: "Belatristics", name: "Belatristics" }
];

const AddBook = () => {
  const [imageName] = useState("");
  let [genre] = useState("");
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <Fragment>
      <Header />
      <AddBookStyle>
        <H1>Add New Book</H1>
        <Formik
          initialValues={{ author: "", title: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            const formData = new FormData();
            formData.append("file", file);
            try {
              const res = await axios.post(
                "http://localhost:4000/books/imgUpload",
                formData,
                {
                  headers: {
                    "Contant-Type": "multipart/form-data"
                  }
                }
              );

              const { fileName, filePath, type, fullName } = res.data;

              setUploadedFile({ fullName, filePath });

              await axios.post("http://localhost:4000/books/add", {
                title: values.title,
                author: values.author,
                genre: values.genre,
                image: fullName
              });

              window.location.href = "/catalog";
            } catch (err) {
              console.log("err", err);
              if (err.response.status === 500) {
                console.log("THERE was a problem with the server.");
              } else {
                console.log(err.response.data.msg);
              }
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
            <form onSubmit={handleSubmit}>
              <div className="inputDiv">
                <label>Author</label>
                <input
                  type="text"
                  name="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                />
                <div className="error">
                  {errors.author && touched.author && errors.author}
                </div>
              </div>
              <div className="inputDiv">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <div className="error">
                  {errors.title && touched.title && errors.title}
                </div>
              </div>
              <div className="selectAndFile">
                <div className="selectDiv">
                  <label>Genre</label>
                  <select
                    name="genre"
                    value={values.genre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option key={""} value={""} />

                    {options.map(option => (
                      <option
                        key={option.id}
                        value={option.name}
                        label={option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <div className="error">
                    {errors.genre && touched.genre && errors.genre}
                  </div>
                </div>

                <div className="fileDiv">
                  <p>Pick Image:</p>
                  <label htmlFor="customFile">{filename}</label>
                  <div htmlFor="customFile" className="typeFile">
                    <input
                      type="file"
                      name="file"
                      className="custom-file-input"
                      id="customFile"
                      placeholder="Upload an Image"
                      onChange={onChange}
                    />
                    <div className="error">
                      {errors.image && touched.image && errors.image}
                    </div>
                  </div>
                </div>
              </div>
              <div className="submitBtn">
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </AddBookStyle>
      <Footer />
    </Fragment>
  );
};

export default AddBook;
