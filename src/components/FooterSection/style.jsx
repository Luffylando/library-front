import styled from "styled-components";

const FooterSectionStyle = styled.div`
  width: 40%;
  margin-bottom: 50px;

  .titleSection {
    display: flex;
    /* 
    .number {
      font-size: 26px;
      opacity: 0.7;
      ::after {
        content: " - ";
      }
    } */

    .title {
      margin-left: 5px;
      font-size: 22px;
      font-weight: bold;
      width: fit-content;
    }
  }
  .itemsSection {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    a {
      p {
        margin: 5px 0px 0px 0px;
        margin-left: 5px;
        font-weight: 600;
        line-height: 1.1;
        font-size: 14px;
        letter-spacing: 0.5px;
        color: #fff;
        cursor: pointer;
        opacity: 0.7;
        width: fit-content;

        :hover {
          opacity: 1;
        }
      }
    }
  }
`;

export default FooterSectionStyle;
