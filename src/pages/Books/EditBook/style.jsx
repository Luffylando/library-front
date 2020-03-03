import styled from "styled-components";
import leftCoverImage from "../../../assets/imgs/addBookCover.jpeg";

const EditBookStyle = styled.div`
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
    padding: 60px 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
    }

    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;

      .selectDiv {
        width: 48%;
      }

      .inputField {
        width: 45%;
        input {
          background: #f9f8f8;
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

    .selectDiv {
      padding: 0px 0px;
      width: 49%;
      min-height: 45px;
      position: relative;

      .errorMsg {
        top: 5px;
        right: 0px;
        z-index: 999999;
        position: absolute;
        color: #a93847;
      }
      label {
        margin: 15px 0px;
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
    .selectField__control {
      background: #f9f8f8;
    }

    .editImage {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      img {
        width: 100px;
        height: 120px;
      }
    }
  }
`;

export default EditBookStyle;
