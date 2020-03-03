import styled from "styled-components";
import leftCoverImage from "../../assets/imgs/addBookCover.jpeg";

const RegisterStyle = styled.div`
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

      .selectDiv {
        width: 45%;
        display: flex;
        flex-direction: column;
        input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #c4c4c4;
          outline: none;
          color: #444444;
          padding: 0px 0px;
          height: 25px;
          background: #f9f8f8;
        }
        label {
          margin: 10px 0px;
        }

        .selectField__control {
          border: 1px solid #c4c4c4;
        }

        .errorMsg {
          top: 5px;
          right: 0px;
          z-index: 999999;
          position: absolute;
          color: #a93847;
        }
      }

      .inputField {
        width: 45%;
        margin: 15px 0px;
        input {
          background: #f9f8f8;
        }
      }

      .radioField {
        display: flex;
        flex-direction: column;
        width: 55%;

        .inputField {
          display: flex;
          justify-content: space-between;
          align-items: center;

          input[type="radio"] {
            width: 120px;
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
        width: 45%;
        height: 35px;
        margin: 20px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

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
  }
`;

export default RegisterStyle;
