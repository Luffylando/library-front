import styled from "styled-components";

const TextareaValidationFieldStyle = styled.div`
  margin: 5px 0px;
  label {
    display: flex;
    padding: 10px 0px;
  }

  .textareaDiv {
    position: relative;
    width: 100%;

    textarea {
      resize: none;
      width: 100%;
      border: none;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      padding: 10px;
      height: 120px;
      outline: none;
    }
  }

  .errorsShow {
    position: absolute;
    right: 7px;
    padding: 2px 5px;
    top: 5px;
    display: flex;
    background: #fff;
    color: #9a321d;
  }
`;

export default TextareaValidationFieldStyle;
