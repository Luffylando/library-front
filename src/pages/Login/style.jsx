import styled from "styled-components";
import leftCoverImage from "../../assets/imgs/addBookCover.jpeg";

const LoginStyle = styled.div`
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
    position: relative;
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

    .inputField {
      width: 100%;
      padding: 10px 100px;
      label {
        margin: 10px 0px;
      }

      input {
        background: #f9f8f8;
      }
    }
    .errorMsg {
      position: absolute;
      bottom: 110px;
      border: 1px solid #a51515;
      background: #fee8e8;
      color: #a51515;
      border-radius: 5px;
      width: 340px;
      padding: 10px;
      font-size: 14px;
      margin: 50px 100px 20px 100px;
      text-align: center;
    }
  }
`;

export default LoginStyle;
