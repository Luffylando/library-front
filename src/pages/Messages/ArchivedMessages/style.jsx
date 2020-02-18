import styled from "styled-components";

const MessageStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 100px 400px;

  h1 {
    text-align: center;
    margin-bottom: 80px;
  }

  table {
    margin-top: 60px;

    .actionBtn {
      display: flex;
      justify-content: center;
    }
  }
  .linkBtns {
    margin-bottom: 50px;
    display: flex;
    justify-content: flex-end;
  }
`;

export default MessageStyle;
