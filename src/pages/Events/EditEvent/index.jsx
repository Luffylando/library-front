import React, { Fragment, useState, useEffect } from "react";
import EditEventStyle from "./style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import InputValidationField from "../../../components/InputValidationField";
import TextareaValidationField from "../../../components/TextareaValidationField";
import SelectValidationField from "../../../components/SelectValidationField";
import axios, { AxiosResponse } from "axios";
import { Formik } from "formik";
import H1 from "../../../ui/H1";
// import EditEventValidation from "./validation";
import Button from "../../../components/Button";
import DatePicker from "react-datepicker";
import * as moment from "moment";

const EditEvent = props => {
  const apiUrl =
    "http://localhost:4000/events/" + window.location.pathname.split("/")[3];
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Chose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [validate, setValidate] = useState(false);
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
      const result = await axios.get(apiUrl);
      setEvent(result.data);
      setStartDate(result.data.eventDate);
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

  return (
    <Fragment>
      <Header />
      <EditEventStyle>
        <H1>Edit Event</H1>
        <Formik
          initialValues={{
            eventName: "",
            eventCreator: "",
            eventDescription: "",
            eventDate: ""
          }}
          // validationSchema={validate === true ? EditBookValidation : null}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("event", event);
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
                  eventImage: fullName
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
                  eventImage: event.image
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
              <div className="inputDiv">
                <InputValidationField
                  label="Event Name"
                  type="text"
                  name="eventName"
                  placehodler="Event Name"
                  onChange={changeNow}
                  value={values.eventName ? values.eventName : event.eventName}
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
              <div className="textareaDiv">
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
              <div className="selectAndFile">
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
                  padding={"5px 0px"}
                  margin={"100px 0px"}
                  fWeight={"600"}
                  fSize={"16px"}
                  bRadius={"5px"}
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
