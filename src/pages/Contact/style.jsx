import styled from "styled-components";

const ContactStyle = styled.div`
  min-height: calc(100vh - 215px);
  display: flex;
  flex-direction: row;
  background: #f9f8f8;

  form {
    padding: 50px 200px 0px 200px;
    flex-basis: 50%;
    width: 700px;
    margin: 30px auto;
    h1 {
      margin-bottom: 50px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .inputField {
        width: 45%;
      }
    }
    input,
    textarea {
      background: #f9f8f8;
    }

    label {
      margin: 15px 0px;
    }

    .inputDiv {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .contactInfo {
    position: relative;
    background: #f15925;
    margin: 0px;
    flex-basis: 30%;
    /* padding: 30px 50px 00px 200px; */
    color: #fff;

    .info {
      padding: 150px 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    p {
      margin-bottom: 5px;
    }
  }

  .reflectorImage {
    display: flex;
    justify-content: center;
    .box {
      position: absolute;
      width: 100px;
      height: 100px;
      bottom: 80px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;

      path {
        fill: #fff;
      }
    }

    .sentMessage {
      position: absolute;
      background: transparent;
      width: 80px;
      height: 80px;
      bottom: 160px;
      left: 0;
      right: 0px;
      margin-left: auto;
      margin-right: auto;
      animation: paperAirplane 3s ease-in-out infinite;

      @keyframes paperAirplane {
        0% {
          top: 65%;
        }
        50% {
          top: 45%;
        }
        100% {
          top: 65%;
        }
      }

      path {
        fill: #fff;
        background: transparent;
      }
    }
  }
`;

export default ContactStyle;
