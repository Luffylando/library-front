import styled from "styled-components";

const EventsStyle = styled.div`
  padding: 100px 400px;

  .titleSection {
    .mainTitle {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
    }
    .subTitle {
      line-height: 90px;
      color: gray;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    }
  }

  .eventsSection {
    display: flex;
    justify-content: space-between;
    padding: 75px 0px;

    .scheduleSection {
      flex-basis: 55%;
      display: flex;
      flex-direction: column;

      .singleEvent {
        display: flex;
        border-top: 1px solid #c4c4c4;
        .date {
          flex-basis: 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 15px 25px;
          margin: 15px 0px;
          border-left: 5px solid orange;

          .dateNumber {
            font-size: 32px;
            text-align: center;
            line-height: 30px;
            color: #344d71;
            font-weight: 400;
          }

          .dateMount {
            color: #344d71;
            line-height: 30px;
            font-size: 20px;
            text-align: center;
          }
        }

        .eventTitle {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 15px;
          flex-basis: 50%;

          .eventName {
            color: #344d71;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 20px;
          }

          .eventTime,
          .eventDay {
            display: flex;
            align-items: center;
            color: #515151;
          }
        }

        .tag {
          display: flex;
          align-items: center;
          flex-basis: 40%;
        }

        :last-child {
          border-bottom: 1px solid #c4c4c4;
        }
      }

      svg {
        width: 19px;
        height: 19px;
        margin-right: 10px;
        path {
          fill: #515151;
        }
      }
    }
    .btn {
      margin: 70px 0px 40px 0px;
      padding: 20px 60px;
      width: fit-content;
      background: orange;
      color: #fff;
      font-weight: 600;
      font-size: 18px;
      letter-spacing: 1.5px;
      border-radius: 50px;
      cursor: pointer;
    }

    .imageSection {
      margin-top: 30px;
      display: flex;
      flex-basis: 40%;
      justify-content: center;

      img {
        width: 100%;
        -webkit-box-shadow: 32px -29px 0px -1px rgba(52, 77, 113, 1);
        -moz-box-shadow: 32px -29px 0px -1px rgba(52, 77, 113, 1);
        box-shadow: 32px -29px 0px -1px rgba(52, 77, 113, 1);
        border-radius: 2px;
        height: 500px;
      }
    }
  }
`;

export default EventsStyle;
