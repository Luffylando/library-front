import styled from "styled-components";

const CommentStyle = styled.div`
  margin-top: 50px;
  display: flex;

  .image {
    width: 40px;
    height: 40px;
    border: 2px solid #c4c4c4;
    border-radius: 50px;
    margin-right: 15px;
  }

  .infoSection {
    display: flex;
    flex-direction: column;
    width: 400px;
    .comment {
      word-wrap: break-word;
    }
  }
  .nameDate {
    display: flex;
    margin-bottom: 5px;

    .fullName {
      font-size: 12px;
      font-weight: 900;
      margin-right: 20px;
    }

    .date {
      color: #404040;
    }

    .icons {
      display: flex;
      flex-direction: row;
      align-items: right;
      margin-left: 20px;

      svg {
        cursor: pointer;
        width: 17px;
        height: 17px;
        margin: 0px 7.5px;
        path {
          fill: #000;
        }
      }
    }
  }
`;

export default CommentStyle;
