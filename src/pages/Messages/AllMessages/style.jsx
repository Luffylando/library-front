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

    .tableActionBtns {
      display: flex;
      justify-content: center;
    }
  }

  .linkBtns {
    margin-bottom: 50px;
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
