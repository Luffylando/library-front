import styled from "styled-components";
import leftCoverImage from "../../../assets/imgs/addBookCover.jpeg";

const SingleMessageStyle = styled.div`
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

    .selectDiv {
      width: 48%;
    }

    .inputField {
      width: 100%;
      input {
        background: #f9f8f8;
      }
    }

    .textareaDiv {
      width: 100%;

      textarea {
        background: #f9f8f8;
      }
    }
  }
`;

export default SingleMessageStyle;
