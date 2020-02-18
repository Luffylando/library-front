import styled from "styled-components";

const ContactStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 50px 200px;

  display: flex;
  flex-direction: row;

  form {
    flex-basis: 50%;
    width: 700px;
    margin: 20px auto;
    padding: 30px 0px 0px 120px;
    h1 {
      margin-bottom: 60px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .inputDiv {
      display: flex;
      flex-direction: column;
      width: 100%;

      label {
        margin: 5px;
      }

      input {
        border: none;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        height: 50px;
        margin: 5px;
        padding-left: 5px;
      }

      textarea {
        border: none;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        height: 150px;
        margin: 5px;
        padding: 10px 5px;
      }
    }

    .submitBtn {
      margin-top: 30px;
      width: 100%;
      text-align: right;
    }
  }

  .contactInfo {
    margin: 20px 0px;
    flex-basis: 50%;
    padding: 30px 50px 00px 200px;

    p {
      margin-bottom: 5px;
    }

    .headline {
      font-weight: bold;
      margin-top: 50px;
    }
  }
`;

export default ContactStyle;
