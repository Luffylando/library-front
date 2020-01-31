import styled from "styled-components";

const ConfirmButtonStyle = styled.div`
  position: absolute;
  left: 0;
  margin: auto;
  right: 0;
  top: 0;
  bottom: 0;
  height: 250px;
  width: 500px;
  background: #fff;
  border: 3px solid #c4c4c4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  .question {
    text-align: center;
    margin: 90px auto 40px auto;
    font-size: 16px;
    font-weight: 600;
  }

  .answers {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
      cursor: pointer;
      margin: 0px 10px;
      border: none;
      border: 1px solid #000;
      background: #fff;
      width: fit-content;
      padding: 5px 15px;
      border-radius: 5px;
    }
  }
`;

export default ConfirmButtonStyle;
