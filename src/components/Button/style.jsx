import styled from "styled-components";

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  background: ${props => (props.bgColor ? props.bgColor : "#fff")};
  color: ${props => (props.txtColor ? props.txtColor : "#000")};
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  border: none;
  border: ${props =>
    props.btnBorder ? props.btnBorder : "1px solid transparent"};
  border-top-left-radius: ${props => (props.btlr ? props.btlr : "0px")};
  border-top-right-radius: ${props => (props.btrr ? props.btrr : "0px")};
  border-bottom-left-radius: ${props => (props.bblr ? props.bblr : "0px")};
  border-bottom-right-radius: ${props => (props.bbrr ? props.bbrr : "0px")};
  padding: ${props => (props.padding ? props.padding : "10px 15px")};
  margin: ${props => (props.margin ? props.margin : "10px 15px")};

  border-radius: ${props => (props.bRadius ? props.bRadius : "20px")};
  font-size: ${props => (props.fSize ? props.fSize : "16px")};
  font-weight: ${props => (props.fWeight ? props.fWeight : "300")};
  transition: ${props => (props.transition ? props.transition : "all 0.5s")};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "0.2px"};
  outline: none;
  :hover {
    width: ${props => (props.width ? props.width : "auto")};
    height: ${props => (props.height ? props.height : "auto")};
    background: ${props => (props.hoverBg ? props.hoverBg : "")};
    color: ${props => (props.hoverTxt ? props.hoverTxt : "")};
    border: ${props => (props.hoverBorder ? props.hoverBorder : "")};
  }
`;

export default ButtonStyle;
