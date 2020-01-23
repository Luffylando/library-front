import styled from "styled-components";

const NavbarStyle = styled.div`
  height: 65px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 100px;
  list-style-type: none;
  border-bottom: 1px solid #ddd;

  li a {
    color: #000;
    font-size: 1.5em;
    margin-right: 2em;
    text-decoration: none;
    position: relative;
    font-family: "Dosis", sans-serif;
    cursor: pointer;
    border-bottom: 5px solid transparent;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active-cool-link2::after,
  .normal-cool-link2::after {
    content: "";
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 0;
    border-bottom: 3px solid #78cbc2;
    margin-top: 10px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  .normal-cool-link2:hover::after {
    width: 100%;
    opacity: 1;
    height: 48px;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .active-cool-link2 {
    border-bottom: 5px solid #78cbc2 !important;
  }
`;

export default NavbarStyle;
