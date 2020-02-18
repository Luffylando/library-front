import styled from "styled-components";
import lib from "../../assets/imgs/lib.jpeg";

const AboutStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 50px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: Center;

  .mainTitle {
    font-size: 55px;
    text-align: center;
    margin: 10px 0px 20px 0px;
  }

  .mainSubtitle {
    font-size: 22px;
    text-align: center;
    line-height: 60px;
    margin: 20px 0px;
  }

  p {
    font-size: 15px;
    text-align: justify;
    margin: 40px 0px;
  }

  .libImg {
    height: 350px;
    width: 90%;
    background-image: url(${lib});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: right top;
  }

  .btns {
    display: flex !important;
    flex-direction: row !important;
    text-align: center;
    .register {
      cursor: pointer;
      border: none;
      background: orange;
      color: #fff;
      padding: 15px 55px;
      border-radius: 30px;
      font-size: 16px;
      margin: 20px 10px;
    }
    .learn {
      cursor: pointer;
      border: none;
      border: 1px solid orange;
      background: #fff;
      color: #555;
      padding: 15px 55px;
      border-radius: 30px;
      font-size: 16px;
      margin: 20px 10px;
    }
  }
`;

export default AboutStyle;
