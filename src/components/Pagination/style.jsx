import styled from "styled-components";

const PaginationStyle = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    li {
      list-style: none;
      padding: 5px 15px;
      border: 1px solid #000;
      cursor: pointer;
      margin: 2.5px;
    }

    .active {
      border: 2px solid #3f5d88;
    }
  }
`;

export default PaginationStyle;
