import React, { Fragment, useState, useEffect } from "react";
import EditEventStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import InputValidationField from "../../../components/InputValidationField";
import TextareaValidationField from "../../../components/TextareaValidationField";
import axios from "axios";
import { Formik } from "formik";
import H2 from "../../../ui/H2";
import Button from "../../../components/Button";
import DatePicker from "react-datepicker";
import * as moment from "moment";
import Select from "react-select";

const options = [
  { value: true, label: "Highlight" },
  { value: false, label: "Normal" }
];

const customStyles = {
  option: (styles, state) => ({
    ...styles,
    color: state.isSelected ? "#FFF" : styles.color,
    backgroundColor: state.isSelected ? "#559564" : styles.color,
    borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
    border: "none",

    "&:hover": {
      color: "#FFF",
      backgroundColor: "#F68282",
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

const EditEvent = props => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadFile, setUploadedFile] = useState({});
  const [validate, setValidate] = useState(false);
  let [selectedOption, setSelectedOption] = useState({});

  const initialEventState = {
    eventName: "",
    eventCreator: "",
    eventDescription: "",
    eventDate: "",
    eventImage: ""
  };

  const [event, setEvent] = useState(initialEventState);
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = time => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:4000/events/${window.location.pathname.split("/")[3]}`
      );
      setEvent(result.data);
      setStartDate(result.data.eventDate);
      setSelectedOption(
        result.data.highlighted === 1
          ? { label: "Highlight", value: true }
          : { label: "Normal", value: false }
      );
    };
    fetchData();
  }, []);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const changeNow = e => {
    e.persist();
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSelectChange = chosenOption => {
    setSelectedOption(chosenOption);
  };

  return (
    <Fragment>
      <Header />
      <EditEventStyle>
        <div className="leftCoverImage"></div>
        <Formik
          initialValues={{
            eventName: "",
            eventCreator: "",
            eventDescription: "",
            eventDate: ""
          }}
          // validationSchema={validate === true ? EditBookValidation : null}
          onSubmit={async (values, { setSubmitting }) => {
            const formData = new FormData();
            formData.append("file", file);
            if (file) {
              try {
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

                const data = {
                  eventName: event.eventName,
                  eventDescription: event.eventDescription,
                  eventCreator: event.eventCreator,
                  eventDate: moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
                  eventImage: fullName,
                  highlighted: selectedOption.value
                };

                await axios
                  .put(
                    `http://localhost:4000/events/edit/${
                      window.location.pathname.split("/")[3]
                    }`,
                    data
                  )
                  .then(result => {
                    props.history.push(
                      "/events/" + window.location.pathname.split("/")[3]
                    );
                  })
                  .catch(error => console.log("error", error));

                setTimeout(() => {
                  setSubmitting(false);
                }, 0);
              } catch (error) {
                console.log("error", error);
              }
            } else {
              try {
                const data = {
                  eventName: event.eventName,
                  eventDescription: event.eventDescription,
                  eventCreator: event.eventCreator,
                  eventDate: moment(startDate).format("YYYY-MM-DD HH:mm:ss"),
                  eventImage: event.image,
                  highlighted: selectedOption.value
                };

                await axios
                  .put(
                    `http://localhost:4000/events/edit/${
                      window.location.pathname.split("/")[3]
                    }`,
                    data
                  )
                  .then(result => {
                    props.history.push(
                      "/events/" + window.location.pathname.split("/")[3]
                    );
                  })
                  .catch(error => console.log("error", error));

                setTimeout(() => {
                  setSubmitting(false);
                }, 0);
              } catch (error) {
                console.log("error", error);
              }
            }
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
              <H2>Edit Event</H2>
              <div className="row">
                <div className="inputField">
                  <InputValidationField
                    label="Event Name"
                    type="text"
                    name="eventName"
                    placehodler="Event Name"
                    onChange={changeNow}
                    value={
                      values.eventName ? values.eventName : event.eventName
                    }
                    errors={errors.eventName}
                    touched={touched.eventName}
                  />
                </div>
                <div className="inputField">
                  <InputValidationField
                    label="Event Creator"
                    type="text"
                    name="eventCreator"
                    placehodler="Event Creator"
                    onChange={changeNow}
                    onBlur={handleBlur}
                    value={
                      values.eventCreator
                        ? values.eventCreator
                        : event.eventCreator
                    }
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
                    // selected={event.eventDate ? event.eventDate : startDate}
                    onChange={date => setStartDate(date)}
                    timeFormat="HH:mm"
                    timeClassName={handleColor}
                    name="eventDate"
                    value={
                      startDate
                        ? moment(startDate).format("DD-MM-YYYY HH:mm")
                        : moment(event.eventDate).format("DD-MM-YYYY HH:mm")
                    }
                  />
                </div>
                <div className="selectDiv">
                  <label>Set Highlight</label>
                  <Select
                    styles={customStyles}
                    value={selectedOption ? selectedOption : event.highlighted}
                    onChange={handleSelectChange}
                    options={options}
                    className="selectInput"
                    classNamePrefix="selectField"
                    //placeholder="Set Highlighted"
                    defaultValue={{
                      label: event.highlighted ? "Highlighted" : "Normal",
                      value: event.highlighted ? true : false
                    }}
                  />
                </div>
              </div>
              <TextareaValidationField
                label="Event Description"
                name="eventDescription"
                placehodler="Event Description"
                onChange={changeNow}
                onBlur={handleBlur}
                value={
                  values.eventDescription
                    ? values.eventDescription
                    : event.eventDescription
                }
                errors={errors.eventDescription}
                touched={touched.eventDescription}
              />
              <div className="rowSelect">
                <div className="inputField">
                  <div className="fileDiv">
                    <p>Pick New Event Image:</p>

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
                        {errors.eventImage &&
                          touched.eventImage &&
                          errors.eventImage}
                      </div>
                    </div>
                  </div>
                </div>
                {event.eventImage ? (
                  <div className="editImage">
                    <label>Current Image:</label>
                    <img
                      className="chosenImg"
                      alt={`${event.eventImage}${event.id}`}
                      src={
                        event.eventImage
                          ? `../../../events/${event.eventImage}`
                          : null
                      }
                    ></img>
                  </div>
                ) : null}
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
                  btnText={"Edit Event"}
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
      </EditEventStyle>
      <Footer />
    </Fragment>
  );
};
export default EditEvent;
