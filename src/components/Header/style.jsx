import styled from "styled-components";

const HeaderStyle = styled.div`
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
        padding: 0px 20px;
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
          }
          .sortBy {
            display: flex;
            align-items: center;

            select {
              outline: none;
              font-size: 14px;
              border: none;
              color: #4c4949;
              background: none;
              width: 150px;
              border-left: 1px solid #d4d4d4;
              height: 50px;
              margin-right: 20px;
              padding: 0px 10px;
              option {
                padding: 15px 0px;
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

        &:last-child {
          border: none;
        }

        p {
          font-weight: 900;
          letter-spacing: 1.2px;
          color: #3d5c89;
          display: flex;
          align-items: center;

          i {
            border: solid black;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            .down {
              transform: rotate(45deg);
              -webkit-transform: rotate(45deg);
            }
          }

          .submenuWindow {
            position: absolute;
            background: #fff;
            border: 1px solid #f5f5f5;
            border-radius: 10px;
            width: 230px;
            right: 0;
            top: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            a {
              margin: 0px;
              border: 1px solid gray;
              padding: 5px 0px;
              display: flex;
              justify-content: center;
              width: 100%;

              :hover {
                text-decoration: underline;
              }

              p {
                color: #000;
                font-size: 14px;
                font-weight: 100;
              }
            }
          }
        }
        svg {
          display: flex;
          align-items: center;
          width: 20px;
          height: 20px;
          margin-right: 20px;
          path {
            fill: #3d5c89;
          }
        }
      }
    }
  }
`;

export default HeaderStyle;
