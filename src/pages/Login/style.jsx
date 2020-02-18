import styled from "styled-components";

const LoginStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 100px 650px;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    width: 550px;
    padding: 120px;
    border-radius: 15px;
    background: #fff;
    align-items: center;
  }

  .loginBox {
    h1 {
      color: #000;
      width: 100%;
      font-size: 50px;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
  }

  .inputBox {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input {
      width: 300px;
      height: 50px;
      border: none;
      border-bottom: 1px solid #000;
      margin: 5px 0px;
      outline: none;
      padding-left: 10px;
      font-size: 17px;
      background: transparent;
      transition: all 1s ease-in;
      ::placeholder {
      }
    }

    .divInput {
      position: relative;
      svg {
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        path {
          fill: #000;
        }
      }
    }
  }

  .btnArea {
    position: relative;
    margin-top: 30px;

    input[type="submit"] {
      width: 310px;
      height: 40px;
      border: none;
      background: #3d5c97;
      cursor: pointer;
      color: #fff;
    }

    .errorMsg {
      position: absolute;
      left: auto;
      right: auto;
      top: 50px;
      width: 310px;
      text-align: center;
      color: #de0a66;
      padding: 10px 20px;
      border: 1px solid #de0a66;
      border-radius: 3px;
      background: #f9e3ec;
    }
  }
`;

export default LoginStyle;
