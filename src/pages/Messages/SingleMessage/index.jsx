import React, {Component} from 'react'
import SingleMessageStyle from './style';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import axios from 'axios';
import { Formik } from "formik";



class SingleMessage extends Component {

    constructor(){
        super();
        this.state= {
            message: {}
        }

    }

    async componentDidMount(){

        let id = window.location.pathname.split("/")[3];
        let message = await axios.get(`http://localhost:4000/contact/${id}`);
        this.setState({message: message.data})
    }

    render() {
        return(
            <>
            <Header />
            <SingleMessageStyle>

                <h1>Single Messages</h1>
                <p>From: {this.state.message.lastName} {this.state.message.firstName}</p>
                <p>Email: {this.state.message.email}</p>
                <p>Message: {this.state.message.message}</p>

                <h3>Answer</h3>
                <>
                <Formik
                    initialValues={{ answerText: "", answerSubject: ""}}
                    onSubmit={async (values, { setSubmitting }) => {
                        console.log('val', values)
            
                        await axios.post(`http://localhost:4000/contact/email`, {
                            // mailerTo: this.state.message.email,
                            mailerTo: 'ogistdipen@outlook.com',
                            mailerSubject: values.answerSubject,
                            mailerText: values.answerText
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
                 <div className="inputDiv">
                <label>Subject</label>
                <textarea
                  type="text"
                  name="answerSubject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.answerSubject}
                />
                <div className="error">
                  {errors.answerSubject && touched.answerSubject && errors.answerSubject}
                </div>
              </div>
              <div className="inputDiv">
                <label>Answer Text</label>
                <textarea
                  type="text"
                  name="answerText"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.answerText}
                />
                <div className="error">
                  {errors.answerText && touched.answerText && errors.answerText}
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


                </>
               
            </SingleMessageStyle>
            <Footer />
            </>
        );
    }
}



export default SingleMessage;

