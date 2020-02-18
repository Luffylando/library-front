import styled from "styled-components";

const SelectValidationFieldStyle = styled.div`
  label {
    display: flex;
  }

  .inputDiv {
    position: relative;

    .errorsShow {
      position: absolute;
      right: 15px;
      top: 12.5px;
      display: flex;
      background: #fff;
      padding: 0px 10px;
      color: #9a321d;
    }
  }
`;

export default SelectValidationFieldStyle;
