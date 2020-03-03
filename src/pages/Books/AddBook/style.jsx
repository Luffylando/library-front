import styled from "styled-components";
import leftCoverImage from "../../../assets/imgs/addBookCover.jpeg";

const AddBookStyle = styled.div`
  min-height: calc(100vh - 215px);
  display: flex;
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
        width: 48%;
      }

      .inputField {
        width: 45%;
      }
    }

    .textareaDiv {
      width: 100%;
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
  }
`;

export default AddBookStyle;
