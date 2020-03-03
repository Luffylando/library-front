import styled from "styled-components";
import leftCoverImage from "../../../assets/imgs/addBookCover.jpeg";

const EditEventStyle = styled.div`
  min-height: calc(100vh - 215px);
  display: flex;
  background: #f9f8f8;

  .leftCoverImage {
    background-image: url(${leftCoverImage});
    height: calc(100vh - 215px);
    width: 30%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: right top;
  }

  form {
    width: 70%;
    padding: 0px 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
      width: 100%;
      text-align: center;
      margin-bottom: 60px;
    }

    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;

      .inputField {
        width: 46%;
        input {
          background: #f9f8f8;
        }
      }
    }

    .rowSelect {
      display: flex;
      justify-content: space-between;
      .selectDiv {
        width: 48%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        input {
          width: 95%;
          border: none;
          border: 1px solid #c4c4c4;
          border-radius: 5px;
          outline: none;
          color: #444444;
          background: #f9f8f8;

          padding: 10px;
        }

        .selectField__control {
          border: 1px solid #c4c4c4;
          background: #f9f8f8;
        }

        .errorMsg {
          top: 5px;
          right: 0px;
          z-index: 999999;
          position: absolute;
          color: #a93847;
        }
        label {
          margin: 10px 0px;
        }
      }

      .editImage {
        padding-right: 10px;
        width: 40%;
        img {
          width: 100%;
          max-height: 150px;
        }
      }
    }

    .textareaDiv {
      width: 100%;
      textarea {
        background: #f9f8f8;
      }
    }

    .fileDiv {
      height: 35px;
      width: fit-content;
      margin: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      label {
        margin-left: 20px;
        padding: 10px 15px;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        cursor: pointer;
      }

      p {
        margin: 0px;
        font-size: 16px;
        margin-bottom: 5px;
      }
      input[type="file"] {
        display: none;
      }
    }
  }
`;

export default EditEventStyle;
