import styled from "styled-components";

const RegisterStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 30px 450px;
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 650px;
    border-radius: 5px;
    margin: 40px;
    background: #fff;
    align-items: center;
    border: 1px solid #000;

    .labelForm {
      width: 100%;
      border-bottom: 1px solid #000;
      padding: 15px 30px;
      font-weight: 600;
      font-size: 15px;
    }
    .fields {
      padding: 40px 50px;
      width: 100%;
      .inputRow {
        display: flex;
        justify-content: space-between;
        div {
          flex-basis: 49%;
          input {
            width: 100%;
            border: none;
            border: 1px solid #c4c4c4;
            height: 40px;
            border-radius: 5px;
            padding: 0px 5px;
            margin: 5px 0px;
          }
        }
      }
    }

    input {
      width: 100%;
      border: none;
      border: 1px solid #c4c4c4;
      height: 40px;
      border-radius: 5px;
      padding: 0px 5px;
      margin: 5px 0px;
    }
    .errorsShow {
      top: 15px;
    }

    .inputRow {
      .radioRow {
        padding: 20px 0px;
        input[type="radio"] {
          height: 15px;
          width: 30px !important;
          margin-right: 0px;
        }
      }
      .fileDiv {
        height: 60px;
        width: fit-content;
        margin-left: 20px;
        display: flex;
        flex-direction: column;

        p {
          margin: 0px;
          font-size: 16px;
          margin-bottom: 5px;
        }

        label {
          font-size: 16px;
          border: 1px solid #ccc;
          display: inline-block;
          cursor: pointer;
          height: 40px;
          display: flex;
          align-items: center;
          padding: 0px 20px;
        }

        .typeFile {
        }

        input[type="file"] {
          display: none;
        }
      }
    }
    .regBtn {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0px 105px 20px 105px;
      text-align: right;

      a {
        text-decoration: underline;
      }

      .btn {
        border: none;
        padding: 10px 20px;
        background: #3f5c88;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;

export default RegisterStyle;
