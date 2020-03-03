import styled from "styled-components";

const MessageStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 50px 400px 60px 400px;
  background: #f9f8f8;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  table {
    margin-top: 20px;

    .actionBtns {
      display: flex;
      justify-content: center;
    }
  }
  .noMessages {
    height: 150px;
  }
  .linkBtns {
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
  }
`;

export default MessageStyle;
