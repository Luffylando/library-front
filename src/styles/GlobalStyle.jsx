import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}


    body {
    font-family: 'Poppins', sans-serif;
    }

    .notification-custom-icon {
  flex-basis: 20%;
  position: relative;
  display: inline-block;
  padding: 8px 8px 8px 12px;

  .fa {
    top: 50%;
    left: 50%;
    color: #fff;
    font-size: 28px;
    position: relative;
    transform: translate(-50%, -50%);
  }
}

.notification-custom-success {
  width: 100%;
  display: flex;
  background-color: #3F5D88;
  border-left: 7px solid #001371;
  border-radius: 3px;

  .notification-custom-icon {
    border-left: 8px solid darken(#28a745, 15%);
  }
  .notification-custom-content {
      min-width: 310px;
      width: 310px;
      .notification-message {
          .message-header {
              font-weight: 600;
              color: #fff;
              font-size: 14px;
              border-bottom: 1px solid #fff;
              margin: 0px 25px;
              padding: 10px 0px;
          }

          .message {
              padding: 10px 25px;
              color: #fff; 
          }
      }
  }
}


.custom-ui {
  border: 2px solid #c4c4c4;
  border-radius: 10px;
  padding: 50px 100px;

  h1 {
    text-align:center;
  }

  p {
    text-align:center;
  }

  .btns {
    display: flex;
    justify-content:center;
    align-items:center;
    button {
      margin: 10px 5px;
      border: none;
      background: #fff;
      border: 1px solid #000;
      border-radius: 5px;
      width: fit-content;
      padding: 2.5px 10px;
      cursor:pointer;
    }
  }
}
`;

export default GlobalStyle;
