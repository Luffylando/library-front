import React, { Fragment, useState, useEffect } from "react";
import EditUserStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios,{AxiosResponse} from "axios";
import { Formik } from "formik";
import H1 from "../../../ui/H1";

const options = [
  { id: "female", name: "Female" },
  { id: "male", name: "Male" },

];

const EditUser = (props) => {
    const [user, setUser] = useState("");
  const apiUrl = "http://localhost:4000/users/" + window.location.pathname.split("/")[3];

  let id = window.location.pathname.split("/")[3];



  useEffect(() => {
    const fetchData = async () => {
      const  result = await axios.get(apiUrl);
        setUser(result.data);
    }
    fetchData();
       
  }, []);

  const changeNow = e => {

    e.persist();
    setUser({...user, [e.target.name]: e.target.value});

  }

  return (
    <Fragment>
      <Header />
      <EditUserStyle>
        <H1>Edit user</H1>
        <Formik
          initialValues={{ firstName: "", lastName: "" }}
          onSubmit={async (values, { setSubmitting }) => {

            
              const data = { firstName: user.firstName, lastName: user.lastName, gender: user.gender, email: user.email, dob: user.dob };
              try {
                  await axios.put(`http://localhost:4000/users/edit/${window.location.pathname.split("/")[3]}`, data)
                }catch(err){
                    console.log('error',err)
                }
            setTimeout(() => {
              setSubmitting(false);
              
            }, 0);
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
                  onChange={changeNow}
                  onBlur={handleBlur}
                  value={values.author ? values.author : user.author}
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
                  value={values.title ? values.title : user.title}
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
                    value={user.genre ? user.genre : values.genre}
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
              </div>
              <div className="submitBtn">
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </EditUserStyle>
      <Footer />
    </Fragment>
  );
};
export default EditUser;
