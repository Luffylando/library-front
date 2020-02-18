import styled from "styled-components";

const TextareaValidationFieldStyle = styled.div`
  label {
    display: flex;
  }

  .textareaDiv {
    position: relative;
    width: 98.5%;

    textarea {
      width: 100%;
    }
  }

  .errorsShow {
    position: absolute;
    right: 7px;
    padding: 2px 5px;
    top: 22px;
    display: flex;
    background: #fff;
    color: #9a321d;
  }
`;

export default TextareaValidationFieldStyle;
