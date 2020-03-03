import styled from "styled-components";

const FeaturedEvent = styled.div`
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
      border-left: 5px solid #f15925;

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
`;

export default FeaturedEvent;
