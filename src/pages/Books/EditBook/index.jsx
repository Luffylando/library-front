import React, { Fragment, useState, useEffect } from "react";
import EditBookStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios,{AxiosResponse} from "axios";
import { Formik } from "formik";
import H1 from "../../../ui/H1";

const options = [
  { id: "Romance", name: "Romance" },
  { id: "History", name: "History" },
  { id: "Crime", name: "Crime" },
  { id: "Philosophy", name: "Philosophy" },
  { id: "Belatristics", name: "Belatristics" }
];

const EditBook = (props) => {
  const apiUrl = "http://localhost:4000/books/" + window.location.pathname.split("/")[3];
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const initialBookState = {
    title: '',
    author: '',
    genre: '',
    image: ''
  }

  const [book, setBook] = useState(initialBookState)

  let id = window.location.pathname.split("/")[3];



  useEffect(() => {
    const fetchData = async () => {
      const  result = await axios.get(apiUrl);
        setBook(result.data);
    }
    fetchData();
       
  }, []);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const changeNow = e => {

    e.persist();
    setBook({...book, [e.target.name]: e.target.value});

  }

  return (
    <Fragment>
      <Header />
      <EditBookStyle>
        <H1>Edit Book</H1>
        <Formik
          initialValues={{ author: "", title: "" }}
          onSubmit={async (values, { setSubmitting }) => {

            
            if(file){

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
              const { filePath, fullName } = res.data;
              
              setUploadedFile({ fullName, filePath });
              
              const data = { author: book.author, title: book.title, genre: book.genre, image: fullName };

              await axios.put(`http://localhost:4000/books/edit/${window.location.pathname.split("/")[3]}`, data)
              .then((result) => {
                props.history.push('/books/' + window.location.pathname.split("/")[3])
              }).catch((error) => console.log('error',error))
              
              
              setTimeout(() => {
                setSubmitting(false);
              }, 0);
            }catch(error){
              console.log('error',error);
            }  
          } else {
            try {
            
            const data = { author: book.author, title: book.title, genre: book.genre, image: book.image };
            
            await axios.put(`http://localhost:4000/books/edit/${window.location.pathname.split("/")[3]}`, data)
            .then((result) => {
              props.history.push('/books/' + window.location.pathname.split("/")[3])
            }).catch((error) => console.log('error',error))
            
            setTimeout(() => {
              setSubmitting(false);
              
            }, 0);
          }catch(error){
            console.log('error',error);
          }}}}
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
                  onChange={changeNow}
                  onBlur={handleBlur}
                  value={values.author ? values.author : book.author}
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
                  onChange={changeNow}
                  onBlur={handleBlur}
                  value={values.title ? values.title : book.title}
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
                    value={book.genre ? book.genre : values.genre}
                    onChange={changeNow}
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
                  <p>Pick New Image:</p>
            
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
                <div className="editImage">
                      <label>Current Image:</label>
                  <img className="chosenImg"  alt={`${book.image}${book.id}`} src={book.image ? `../../../books/${book.image}` : null}></img>
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
      </EditBookStyle>
      <Footer />
    </Fragment>
  );
};
export default EditBook;
