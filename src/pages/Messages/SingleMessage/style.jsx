import styled from "styled-components";

const SingleMessageStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 100px 400px;
  .inputDiv {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      margin: 5px;
    }

    input {
      border: none;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      height: 50px;
      margin: 5px;
      padding-left: 5px;
    }

    textarea {
      border: none;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      height: 150px;
      margin: 5px;
      padding-left: 10px;
      padding-top: 10px;
    }
  }
`;

export default SingleMessageStyle;
