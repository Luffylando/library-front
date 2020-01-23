import styled from "styled-components";

const SingleBookStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 100px 460px;
  display: flex;
  position: relative;

  .deleteBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 380px;
    border: 1px solid #000;
    cursor: pointer;
    background: #fff;
    padding: 7px 20px;
    border-radius: 50px;
    color: #000;
    transition: 0.4s all;

    :hover {
      background: #3f5d88;
      color: #fff;

      span {
        svg {
          path {
            fill: #fff;
          }
        }
      }
    }

    p {
      margin: 0px;
    }

    span {
      width: 18px;
      height: 18px;

      svg {
        width: 18px;
        height: 18px;
        margin-left: 5px;
        path {
          transition: fill 0.4s ease;
          fill: #000;
        }
      }
    }
  }

  .editBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 540px;
    border: 1px solid #000;
    background: #fff;
    padding: 7px 20px;
    border-radius: 50px;
    color: #000;
    transition: 0.4s all;

    :hover {
      background: #3f5d88;
      color: #fff;

      span {
        svg {
          path {
            fill: #fff;
          }
        }
      }
    }

    p {
      margin: 0px;
    }

    span {
      width: 18px;
      height: 18px;

      svg {
        width: 18px;
        height: 18px;
        margin-left: 5px;
        path {
          transition: fill 0.4s ease;
          fill: #000;
        }
      }
    }
  }
  .backBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    left: 340px;
    border: 1px solid #000;
    background: #fff;
    padding: 7px 20px;
    border-radius: 50px;
    color: #000;
    transition: 0.4s all;

    :hover {
      background: #3f5d88;
      color: #fff;

      span {
        svg {
          path {
            fill: #fff;
          }
        }
      }
    }

    p {
      margin: 0px;
    }

    span {
      width: 18px;
      height: 18px;

      svg {
        width: 18px;
        height: 18px;
        margin-left: 5px;
        path {
          transition: fill 0.4s ease;
          fill: #000;
        }
      }
    }
  }

  img {
    width: 320px;
    height: 520px;
  }

  .bookDesc {
    height: 520px;
    padding: 50px 100px 20px 70px;
    width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
      .comment {
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

    button {
      border: none;
      background: none;
      border: 1px solid #000;
      border-radius: 5px;
      padding: 5px 10px;
      margin: 0px 2.5px;
      cursor: pointer;
    }
  }
`;

export { CommentStyle, SingleBookStyle };
