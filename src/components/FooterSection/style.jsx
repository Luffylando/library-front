import styled from "styled-components";

const FooterSectionStyle = styled.div`
  width: 40%;
  margin-bottom: 50px;

  .titleSection {
    display: flex;

    .number {
      font-size: 26px;
      opacity: 0.7;
      ::after {
        content: " - ";
      }
    }

    .title {
      margin-left: 5px;
      font-size: 22px;
      font-weight: bold;
    }
  }
  .itemsSection {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    p {
      margin: 5px 0px 0px 0px;
      margin-left: 17%;
      font-weight: 600;
      line-height: 1.1;
      font-size: 14px;
      letter-spacing: 0.5px;
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export default FooterSectionStyle;
