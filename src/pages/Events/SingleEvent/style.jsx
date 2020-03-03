import styled from "styled-components";

const SingleEventsStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 50px 460px;
  background: #f9f8f8;

  .topBtns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    position: relative;
  }
  h1 {
    margin: 0px 0px 80px 0px;
    text-align: center;
  }

  svg {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    position: absolute;
    height: 30px;
    width: 30px;
    margin: 0px;
    top: 100px;
    right: -50px;
  }
  .bookBtns {
    display: flex;
  }

  .editBtn {
    color: #fff;
  }

  .eventDiv {
    display: flex;
    margin: 20px 0px;
    height: 500px;

    .eventImage {
      img {
        width: 520px;
        height: 450px;
        border-radius: 5px;
        border: 15px solid #3f5d88;
        -webkit-box-shadow: 13px 10px 5px 0px rgba(184, 182, 184, 1);
        -moz-box-shadow: 13px 10px 5px 0px rgba(184, 182, 184, 1);
        box-shadow: 13px 10px 5px 0px rgba(184, 182, 184, 1);
      }
    }

    .eventInfo {
      padding: 40px 20px 60px 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .info {
        b {
          font-size: 16px;
        }
        .eventName {
          font-size: 15px;
        }
        .eventDescription {
          font-size: 15px;
        }
        .eventCreator {
          font-size: 15px;
        }
        .eventDate {
          font-size: 15px;
        }
      }

      .detailsBtn {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
      }
    }
  }
`;

export default SingleEventsStyle;
