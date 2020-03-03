import styled from "styled-components";

const ToggleMenuStyle = styled.div`
  position: absolute;
  background: ${props => (props.background ? props.background : "#fff")};
  color: ${props => (props.color ? props.color : "#000")};
  top: ${props => (props.top ? props.top : "none")};
  bottom: ${props => (props.bottom ? props.bottom : "none")};
  left: ${props => (props.left ? props.left : "none")};
  right: ${props => (props.right ? props.right : "none")};
  padding: ${props => (props.padding ? props.padding : "20px")};
  border: ${props => (props.border ? props.border : "1px solid #000")};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "5px")};
  a {
    color: #fff;
    cursor: pointer;
    :hover {
      font-weight: bold;
    }
  }

  p {
    cursor: pointer;

    :hover {
      font-weight: bold;
    }
  }
`;

export default ToggleMenuStyle;
