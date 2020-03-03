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

    .tableActionBtns {
      display: flex;
      justify-content: center;
    }
  }
  .noMessages {
    height: 150px;
  }

  .linkBtns {
    margin-bottom: 20px;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    /* 
    a {
      border: 1px solid #c4c4c4;
      padding: 4px 15px;
      color: #000;
      border-radius: 5px;
      margin: 0px 5px;
    } */
  }
`;

export default MessageStyle;
