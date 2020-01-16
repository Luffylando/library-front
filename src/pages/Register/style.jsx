import styled from "styled-components";

const RegisterStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 30px 650px;
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
      padding: 40px 100px;
      width: 100%;
      .inputRow {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 15px 0px;

        input {
          width: 100%;
          border: none;
          border: 1px solid #c4c4c4;
          height: 40px;
          border-radius: 5px;
          margin: 0px 5px;
          padding-left: 10px;
        }
        input[type="radio"] {
          height: 15px;
          width: 30px;
          margin-right: 0px;
        }
      }
    }

    .regBtn {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0px 105px 40px 105px;
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
