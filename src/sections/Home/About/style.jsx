import styled from "styled-components";

const AboutStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 360px;

  .mainTitle {
    padding: 50px 320px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    flex-basis: 50%;
    padding-left: 20%;
    background: #580f77;
    h1 {
      color: #fff;
      line-height: 10px;
      height: 35px;
      display: flex;
      justify-content: center;
      text-align: left;
      width: fit-content;
      border-bottom: 3px solid #fff;
      font-weight: 600;
    }
  }

  .description {
    flex-basis: 50%;
    background: #F4F4F4;

    p {
      padding: 90px 320px 50px 120px;
      text-align: justify;
      line-height: 1.4;
      b {
        font-size: 16px;
      }
    }
  }
`;

export default AboutStyle;
