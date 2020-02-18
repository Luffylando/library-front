import styled from "styled-components";
import lib from "../../../assets/imgs/lib.jpeg";

const EventsStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 50px 460px;

  .adminAddBtn {
    width: fit-content;
    position: absolute;
    right: 350px;
  }
  h1 {
    margin: 0px 0px 80px 0px;
    text-align: center;
  }

  .eventDiv {
    display: flex;
    margin: 20px 30px;
    height: 300px;

    .eventImage {
      img {
        width: 360px;
        height: 300px;
      }
    }

    .eventInfo {
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export default EventsStyle;
