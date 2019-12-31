import styled from "styled-components";

const AboutStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 50px 400px;


  .mainTitle {
    font-size:  55px;
    text-align:center;
    margin: 40px 0px 20px 0px;
  }

  .mainSubtitle {
    font-size: 22px;
    text-align:center;
    line-height: 60px;
    margin: 20px 0px;
  }

  .aboutTitle {
    font-size: 62px;
    margin:40 px;
    text-align:center;
  }
  p {
    font-size: 15px;
    text-align:justify;
    margin: 40px 0px;
  }


  .btns {
    text-align:center;
    .register {
      cursor:pointer;
      border: none;
      background: orange;
      color: #fff;
      padding: 15px 55px;
      border-radius: 30px;
      font-size: 16px;
      margin: 20px 10px;
    }
    .learn {
      cursor:pointer;
      border:none;
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
