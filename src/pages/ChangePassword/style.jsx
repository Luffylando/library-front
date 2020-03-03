import styled from "styled-components";
import leftCoverImage from "../../assets/imgs/addBookCover.jpeg";

const ChangePasswordStyle = styled.div`
  min-height: calc(100vh - 215px);
  background: #f9f8f8;
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
      margin-bottom: 80px;
    }

    .inputField {
      width: 100%;
      padding: 0px 100px;

      input {
        background: #f9f8f8;
      }

      label {
        margin: 10px 0px;
      }
    }
  }
`;

export default ChangePasswordStyle;
