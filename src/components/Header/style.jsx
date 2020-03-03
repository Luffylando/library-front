import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100%;
  background: #f9f8f8;
  .header {
    display: flex;
    align-items: center;
    height: 150px;
    border: 1px solid #ddd;

    .logoSearch {
      padding: 20px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-basis: 88%;

      .logo {
        display: flex;
        align-items: center;
        flex-basis: 22%;
        padding-left: 100px;
        cursor: pointer;
        svg {
          width: 80px;
          height: 80px;
          margin-right: 50px;
          path {
            fill: #be992a;
          }
        }
        .logoText {
          h2 {
            color: #3d5c89;
            margin: 0px;
            line-height: 1;
          }
        }
      }
      .search {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0px 10px 0px 20px;
        flex-basis: 70%;
        margin-right: 40px;
        border: 1px solid #ddd;
        border-radius: 50px;
        height: 60px;

        .searchButton {
          display: flex;
          align-items: center;
          width: 100%;
          position: relative;
          height: 60px;

          .searchInput {
            display: flex;
            align-items: center;
            width: 100%;
            border: none;
            padding-left: 20px;
            height: 55px;
            outline: none;
            background: #f9f8f8;
          }
          .sortBy {
            display: flex;
            align-items: center;

            .selectInput {
              width: 150px;
              margin-right: 10px;

              .selectField__control {
                background: #f9f8f8;
                outline-color: red;
                border: none;
                cursor: pointer;
              }
              .selectField__dropdown-indicator {
                padding-right: 0px;
              }
            }
          }
          .goButton {
            background: #f15922;
            color: #fff;
            border: none;
            font-weight: 900;
            padding: 15px 25px;
            border-radius: 50px;
            outline: none;
            cursor: pointer;
          }
        }
      }
    }
    .auth {
      height: 100%;
      flex-basis: 12%;
      border-left: 1px solid #ddd;
      .item {
        height: 33.3%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        border-bottom: 1px solid #ddd;
        padding: 0px 30px;
        cursor: pointer;
        position: relative;

        .accountImage {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          margin-right: 20px;
          border: 2px solid #c4c4c4;
        }

        &:last-child {
          border: none;
        }

        p {
          font-weight: 900;
          letter-spacing: 1.2px;
          color: #3d5c89;
          display: flex;
          align-items: center;
        }
        .arrow {
          display: flex;
          align-items: center;
          position: absolute;
          right: 15px;
          svg {
            width: 16px;
            height: 16px;
            path: {
              fill: #3f5c88;
            }
          }
        }
      }

      .submenuWindow {
        position: absolute;
        background: #f15925;
        font-weight: 600;
        border-radius: 5px;
        width: 230px;
        right: 0;
        top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 99;

        a {
          margin: 0px;
          padding: 10px 0px;
          display: flex;
          justify-content: center;
          width: 100%;
          border-bottom: 1px solid #fff;

          :hover {
            text-decoration: underline;
            text-decoration-color: #fff;
          }

          p {
            color: #fff;
            font-size: 14px;
          }
        }
      }
    }
    svg {
      width: 20px;
      height: 20px;
      margin-right: 20px;
      path {
        fill: #3d5c89;
      }
    }
  }
`;

export default HeaderStyle;
