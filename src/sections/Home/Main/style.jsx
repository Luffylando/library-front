import styled from "styled-components";

const MainStyle = styled.div`
  position: relative;
  .backgroundImg {
    height: 580px;
    background: #78cbc2;

    img {
      display: flex;
      margin-left: 59%;
      justify-content: flex-end;
      height: 100%;
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      opacity: 0.5;
    }
  }

  .eventBox {
    position: absolute;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 60%;
    height: 490px;
    top: 140px;
    padding: 35px;
    background: #f9f8f8;
    -webkit-box-shadow: -1px 0px 24px 3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: -1px 0px 24px 3px rgba(0, 0, 0, 0.2);
    box-shadow: -1px 0px 24px 3px rgba(0, 0, 0, 0.2);

    .descriptionSection {
      flex-basis: 40%;
      padding: 20px 50px 20px 60px;
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */

      .descTitle {
        padding: 15px 0px;
        text-transform: uppercase;
        font-size: 32px;
        line-height: 1.1;
        letter-spacing: 2px;
        font-family: "Open Sans", sans-serif;
      }

      .descText {
        padding: 10px 0px;
        font-style: italic;
        font-weight: bold;
        letter-spacing: 0.04rem;
        font-size: 1.5rem;
        color: #707070;
        font-family: "Open Sans", sans-serif;
        letter-spacing: 1.3px;
      }

      .shareEvent {
        display: flex;
        align-items: center;
        text-decoration: underline;
        font-size: 14px;
        padding: 15px 0px;
        color: #3f5d88;
        cursor: pointer;

        svg {
          margin-right: 10px;
          display: flex;
          align-items: center;
          width: 20px;
          height: 20px;
          path {
            fill: #3f5d88;
          }
        }
      }
      button {
        margin: 80px 0px 0px 0px;
      }
    }

    .imageContainer {
      flex-basis: 60%;
      img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 410px;
        width: 100%;
        padding-left: 40px;
      }
    }
  }
`;

export default MainStyle;
