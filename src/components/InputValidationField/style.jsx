import styled from "styled-components";

const InputValidationFieldStyle = styled.div`
  width: 100%;
  label {
    display: flex;
  }

  .inputDiv {
    position: relative;
  }

  .errorsShow {
    position: absolute;
    right: 6px;
    top: 22px;
    display: flex;
    background: #fff;
    padding: 0px 10px;
    color: #9a321d;
  }
`;

export default InputValidationFieldStyle;
