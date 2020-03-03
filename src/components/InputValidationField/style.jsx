import styled from "styled-components";

const InputValidationFieldStyle = styled.div`
  width: 100%;
  label {
    display: flex;
  }

  .inputDiv {
    position: relative;
  }

  input {
    display: flex;
    height: 30px;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    width: 100%;
    outline: none;
    font-size: 14px;
  }

  .errorsShow {
    position: absolute;
    right: 0px;
    top: 5px;
    display: flex;
    background: #fff;
    padding: 0px 10px;
    color: #9a321d;
  }
`;

export default InputValidationFieldStyle;
