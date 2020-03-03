import React, { Fragment, useState } from "react";
import AddEventStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import InputValidationField from "../../../components/InputValidationField";
import TextareaValidationField from "../../../components/TextareaValidationField";
import axios from "axios";
import { Formik } from "formik";
import H2 from "../../../ui/H2";

import { store } from "react-notifications-component";
import AddEventSchema from "./validation";
import Button from "../../../components/Button";
import DatePicker from "react-datepicker";
import * as moment from "moment";
import Select from "react-select";

// Select style and Data

const options = [
  { value: true, label: "Highlight" },
  { value: false, label: "Normal" }
];

const customStyles = {
  option: (styles, state) => ({
    ...styles,
    color: state.isSelected ? "#FFF" : styles.color,
    backgroundColor: state.isSelected ? "#3F5D88" : styles.color,
    borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
    border: "none",

    "&:hover": {
      color: "#FFF",
      backgroundColor: "#3F5D88",
      border: "none"
    },
    height: "fit-content"
  }),
  control: (styles, state) => ({
    ...styles,
    boxShadow: "none",
    borderColor: "none",
    border: "none",
    "&:hover": {
      borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA"
    }
  })
};

// End of Select style and Data

const AddEvent = () => {
  let [validate, setValidate] = useState(false);
  let [selectedOption, setSelectedOption] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  let handleColor = time => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSelectChange = chosenOption => {
    setSelectedOption(chosenOption);
  };

  return (
    <Fragment>
      <Header />
      <AddEventStyle>
        <div className="leftCoverImage"></div>
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
                const { filePath, fullName } = res.data;
                setUploadedFile({ fullName, filePath });
                await axios.post("http://localhost:4000/events/add", {
                  eventName: values.eventName,
                  eventDescription: values.eventDescription,
                  eventCreator: values.eventCreator,
                  eventDate: moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
                  eventImage: fullName,
                  highlighted: selectedOption.value
                });
              } else {
                console.log("highlighted", selectedOption);
                await axios.post("http://localhost:4000/events/add", {
                  eventName: values.eventName,
                  eventDescription: values.eventDescription,
                  eventCreator: values.eventCreator,
                  eventDate: moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
                  eventImage: "",
                  highlighted: selectedOption.value
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
                console.log("There was a problem with the server.");
              } else {
                console.log(err.response.data.msg);
              }
            }

            setTimeout(() => {
              window.location.href = "/events";
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
          }) => (
            <form onSubmit={handleSubmit}>
              <H2>Add Event</H2>
              <div className="row">
                <div className="inputField">
                  <InputValidationField
                    label="Event Name"
                    type="text"
                    name="eventName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.eventName}
                    errors={errors.eventName}
                    touched={touched.eventName}
                  />
                </div>
                <div className="inputField">
                  <InputValidationField
                    label="Event Creator"
                    type="text"
                    name="eventCreator"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.eventCreator}
                    errors={errors.eventCreator}
                    touched={touched.eventCreator}
                  />
                </div>
              </div>
              <div className="rowSelect">
                <div className="selectDiv">
                  <label>Event Date</label>
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
                <div className="selectDiv">
                  <label>Set Highlight</label>
                  <Select
                    styles={customStyles}
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    className="selectInput"
                    classNamePrefix="selectField"
                    defaultValue={false}
                  />
                </div>
              </div>
              <TextareaValidationField
                label="Event Description (Optional)"
                name="eventDescription"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventDescription}
                errors={errors.eventDescription}
                touched={touched.eventDescription}
              />
              <div className="inputField">
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
                  padding={"15px 0px"}
                  margin={"15px 0px"}
                  fWeight={"600"}
                  fSize={"16px"}
                  bRadius={"50px"}
                  letterSpacing={"1px"}
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
