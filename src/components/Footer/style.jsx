import styled from "styled-components";

const FooterStyle = styled.div`
  height: 500px;
  background: #3f5d88;
  padding: 90px 400px 60px 400px;
  color: #fff;
  display: flex;
  flex-direction: column;

  .mainSection {
    display: flex;
    flex-basis: 100%;
    flex-direction: row;

    .titleSection {
      flex-basis: 40%;

      .title {
        display: flex;
        flex-direction: row;
        position: relative;
        h1 {
          font-weight: bold;
        }

        svg {
          position: absolute;
          right: 40px;
          height: 60px;
          width: 60px;
        }
      }

      .address {
        margin-top: 100px;

        p {
          font-weight: 600;
          font-size: 16px;
        }
      }
    }
    .linksSection {
      flex-basis: 60%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      padding: 30px 0px;
    }
  }
  .privacySection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-basis: 5%;

    .privacy {
      opacity: 0.6;
    }

    .socialIcons {
      margin-right: 150px;
      svg {
        width: 30px;
        height: 30px;
        margin: 0px 10px;
        cursor: pointer;
        path {
          fill: #fff;
          opacity: 0.7;
        }
      }
    }
  }
`;

export default FooterStyle;
