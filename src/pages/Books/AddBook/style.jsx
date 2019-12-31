import styled from "styled-components";

const AddBookStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 100px 400px;

  h1 {
    text-align: center;
    margin: 0px 0px 50px 0px;
  }

  form {
    padding: 20px 50px;
    display: flex;
    flex-direction: column;

    .inputDiv {
      display: flex;
      flex-direction: column;
      margin-bottom: 25px;

      label {
        font-size: 16px;
        margin-bottom: 5px;
      }
      input {
        height: 40px;
        border: none;
        border-bottom: 1px solid #d4d4d4;
        font-size: 20px;
        outline: none;
        padding-left: 10px;
      }
    }

    .selectAndFile {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 30px;
      .selectDiv {
        width: 49%;
        height: 60px;

        label {
          font-size: 16px;
        }

        select {
          border: none;
          background: none;
          width: 100%;
          border: 1px solid #d4d4d4;
          height: 40px;
          outline: none;

          option {
          }
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

    .submitBtn {
      width: 100%;
      text-align: center;
      margin-top: 50px;
      button {
        border: none;
        color: #fff;
        font-size: 18px;
        width: 100%;
        padding: 10px 0px;
        cursor: pointer;
        background: #559564;
        font-weight: bold;
      }
    }
  }
`;

export default AddBookStyle;
