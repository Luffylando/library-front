import styled from "styled-components";

const SingleBookStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 0px 500px;
  display: flex;
  position: relative;
  flex-direction: column;

  .topBtns {
    display: flex;
    justify-content: space-between;
    margin: 40px 0px;

    .bookBtns {
      display: flex;
    }
  }

  .book {
    display: flex;
    flex-direction: row;
  }
  img {
    width: 320px;
    height: 520px;
    border-radius: 10px;
    -webkit-box-shadow: 13px 10px 5px 0px rgba(184, 182, 184, 1);
    -moz-box-shadow: 13px 10px 5px 0px rgba(184, 182, 184, 1);
    box-shadow: 13px 10px 5px 0px rgba(184, 182, 184, 1);
  }

  .bookDesc {
    height: 520px;
    padding: 50px 100px 20px 70px;
    width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .borrowed {
      margin: 10px 0px;
      padding: 5px 0px;
      font-weight: 600;
      text-decoration: underline;
      letter-spacing: 1px;
    }

    .false {
      border: 1px solid #980000;
      border-radius: 5px;
      padding: 5px 10px;
      width: fit-content;
      margin: 10px 0px;
      color: #980000;
      font-weight: 600;
      background: #f2e9e9;
    }

    .true {
      border: 1px solid #1f3f09;
      border-radius: 5px;
      padding: 5px 10px;
      width: fit-content;
      margin: 10px 0px;
      color: #1f3f09;
      font-weight: 600;
      background: #ebf2e9;
    }

    .thumbs {
      display: flex;
      align-items: center;
      width: 100px;
      justify-content: space-between;
      span {
        height: 24px;
      }
      .up {
        cursor: pointer;
        margin-right: 10px;
        display: flex;
        align-items: center;
        padding: 3px 10px;
        border: 1px solid #000;
        border-radius: 5px;

        svg {
          margin-right: 5px;
        }
        .success {
          path {
            fill: green;
          }
        }
        p {
          margin: 0px 2.5px;
          font-size: 12px;
        }
      }
      .down {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3px 5px;
        border: 1px solid #000;
        border-radius: 5px;

        svg {
          margin-right: 5px;
        }
        .danger {
          path {
            fill: red;
          }
        }
        p {
          margin: 0px 2.5px;
          font-size: 12px;
        }
      }
    }

    p {
      font-size: 18px;
    }

    .btns {
      width: 100%;
      text-align: right;
      button {
        margin: 10px 2.5px;
        width: 120px;
        cursor: pointer;
        outline: none;
      }
      .reserve {
        border: none;
        border-radius: 50px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        padding: 12px 20px;
        background: #f15922;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
      }

      .order {
        border: none;
        border-radius: 50px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        padding: 12px 25px;
        background: #3f5d88;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
`;

const CommentStyle = styled.div`
  padding: 50px 460px 100px 460px;

  .commentSection {
    .otherComments {
      .otherCommentsLikes {
        display: flex;
        margin-left: 50px;

        p {
          border: 1px solid #000;
          padding: 2px 15px;
          margin: 10px 5px;
          cursor: pointer;
        }
      }
    }
  }

  .addComment {
    display: flex;
    width: 70%;

    textarea {
      width: 70%;
      border: none;
      border-bottom: 2px solid #000;
      outline: none;
      font-size: 16px;
      height: 30px;
    }

    .image {
      height: 40px;
      width: 40px;
      border: 2px solid #c4c4c4;
      border-radius: 50px;
      margin-right: 15px;
    }
  }
  form {
    width: 100%;
  }

  .btnSection {
    width: 70%;
    text-align: right;
    display: flex;
    justify-content: flex-end;
  }

  .commentBtnSection {
    display: flex;
  }
`;

export { CommentStyle, SingleBookStyle };
