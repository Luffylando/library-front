import React, { Fragment, useState } from "react";
import AddEventStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import InputValidationField from "../../../components/InputValidationField";
import TextareaValidationField from "../../../components/TextareaValidationField";
import SelectValidationField from "../../../components/SelectValidationField";
import axios from "axios";
import { Formik } from "formik";
import H1 from "../../../ui/H1";
import { store } from "react-notifications-component";
import AddEventSchema from "./validation";
import Button from "../../../components/Button";
import Datetime from "react-datetime";
import DatePicker from "react-datepicker";
import * as moment from "moment";

const AddEvent = () => {
  const [imageName] = useState("");
  let [genre] = useState("");
  let [validate, setValidate] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  let handleColor = time => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  let [quote] = useState("");
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
      <AddEventStyle>
        <H1>Add New Event</H1>
        <Formik
          initialValues={{
            eventName: "",
            eventDescription: "",
            eventCreator: "",
            eventDate: ""
          }}
          validationSchema={validate === true ? AddEventSchema : null}
          onSubmit={async (values, { setSubmitting }) => {
            const formData = new FormData();
            formData.append("file", file);

            try {
              if (file) {
                const res = await axios.post(
                  "http://localhost:4000/events/imgUpload",
                  formData,
                  {
                    headers: {
                      "Contant-Type": "multipart/form-data"
                    }
                  }
                );
                const { fileName, filePath, type, fullName } = res.data;
                console.log("fullName", fullName);
                setUploadedFile({ fullName, filePath });
                await axios.post("http://localhost:4000/events/add", {
                  eventName: values.eventName,
                  eventDescription: values.eventDescription,
                  eventCreator: values.eventCreator,
                  eventDate: moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
                  eventImage: fullName
                });
              } else {
                await axios.post("http://localhost:4000/events/add", {
                  eventName: values.eventName,
                  eventDescription: values.eventDescription,
                  eventCreator: values.eventCreator,
                  eventDate: moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
                  eventImage: ""
                });
              }

              store.addNotification({
                container: "top-right",
                animationIn: ["animated", "bounceIn"],
                animationOut: ["animated", "bounceOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: false
                },
                content: (
                  <div className="notification-custom-success">
                    <div className="notification-custom-content">
                      <div className="notification-message">
                        <div className="message">Event Successfully Added!</div>
                      </div>
                    </div>
                  </div>
                )
              });
            } catch (err) {
              console.log("err", err);
              if (err.response.status === 500) {
                console.log("THERE was a problem with the server.");
              } else {
                console.log(err.response.data.msg);
              }
            }

            setTimeout(() => {
              // window.location.href = "/events";
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            validateForm,
            handleBlur,
            handleSubmit,
            isSubmitting

            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="inputDiv">
                <InputValidationField
                  label="Event Name"
                  type="text"
                  name="eventName"
                  placehodler="Event Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eventName}
                  errors={errors.eventName}
                  touched={touched.eventName}
                />
              </div>
              <div className="inputDiv">
                <div className="inputDiv">
                  <InputValidationField
                    label="Event Creator"
                    type="text"
                    name="eventCreator"
                    placehodler="Event Creator"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.eventCreator}
                    errors={errors.eventCreator}
                    touched={touched.eventCreator}
                  />
                  <DatePicker
                    showTimeSelect
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    timeFormat="HH:mm"
                    timeClassName={handleColor}
                    name="eventDate"
                    value={moment(startDate).format("DD-MM-YYYY HH:mm")}
                  />
                </div>
              </div>
              <div className="textareaDiv">
                <TextareaValidationField
                  label="Event Description (Optional)"
                  name="eventDescription"
                  placehodler="Event Description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eventDescription}
                  errors={errors.eventDescription}
                  touched={touched.eventDescription}
                />
              </div>
              <div className="selectAndFile">
                <div className="fileDiv">
                  <p>Pick Event Image:</p>
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
                <Button
                  bgColor={"#3F5D88"}
                  width={"100%"}
                  padding={"5px 0px"}
                  margin={"10px 0px"}
                  fWeight={"600"}
                  fSize={"16px"}
                  bRadius={"5px"}
                  txtColor={"#fff"}
                  hoverBg={"#fff"}
                  hoverTxt={"#3F5D88"}
                  transition={"all 0.3s"}
                  hoverBorder={"1px solid #3F5D88"}
                  btnText={"Add Event"}
                  type={"submit"}
                  disabled={isSubmitting}
                  onClick={() => {
                    validateForm().then(() => setValidate(true));
                    setTimeout(() => {
                      setValidate(false);
                    }, 500);
                  }}
                ></Button>
              </div>
            </form>
          )}
        </Formik>
      </AddEventStyle>
      <Footer />
    </Fragment>
  );
};

export default AddEvent;
