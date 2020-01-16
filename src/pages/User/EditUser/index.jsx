import React, { Fragment, useState, useEffect } from "react";
import EditUserStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios,{AxiosResponse} from "axios";
import { Formik } from "formik";
import H1 from "../../../ui/H1";
import * as moment from 'moment';

const options = [
  { id: "female", name: "Female" },
  { id: "male", name: "Male" },

];

const EditUser = (props) => {
    const [user, setUser] = useState("");
  const apiUrl = "http://localhost:4000/users/" + window.location.pathname.split("/")[3];


  useEffect(() => {
    const fetchData = async () => {
      const  result = await axios.get(apiUrl);
        setUser(result.data);
        console.log('result',result)
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
                    localStorage.removeItem("userFirstName");
                    localStorage.removeItem("userLastName");
                    localStorage.setItem("userFirstName", user.firstName);
                    localStorage.setItem("userLastName", user.lastName);
                    window.location.href = "/";
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
                <div className="labelInput">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={changeNow}
                  onBlur={handleBlur}
                  value={user.firstName ? user.firstName : values.firstName}
                  />
                  </div>
                <div className="error">
                  {errors.firstName && touched.firstName && errors.firstName}
                </div>
              </div>
              <div className="inputDiv">
              <div className="labelInput">

                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={changeNow}
                  onBlur={handleBlur}
                  value={user.lastName ? user.lastName : values.lastName}
                />
                </div>
                <div className="error">
                  {errors.lastName && touched.lastName && errors.lastName}
                </div>
              </div>
                <div className="inputDiv">
                <div className="labelInput">

                  <label>Date of Birth</label>
                 <input 
                  type="date" 
                  name="dob" 
                  onChange={changeNow}
                  onBlur={handleBlur}
                  value={user.dob ? moment(user.dob).format('YYYY-MM-DD') : values.dob}
                 />
                 </div>
                  <div className="error">
                    {errors.dob && touched.dob && errors.dob}
                    
                  </div>
                </div>
                <div className="inputDiv">
                <div className="labelInput">

                  <label>Email</label>
                 <input type="text" name="email" 
                 value={user.email ? user.email : values.email }
                 onChange={changeNow}
                  onBlur={handleBlur}
                 />
                 </div>
                  <div className="error">
                    {errors.email  && touched.email && errors.email}
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
