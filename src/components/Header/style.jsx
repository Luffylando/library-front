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
        align-items: center;
        padding: 0px 40px;
        flex-basis: 78%;

        .searchButton {
          width: 100%;
          position: relative;
          height: 60px;

          .searchInput {
            width: 100%;
            height: 60px;
            border: none;
            border: 1px solid #ddd;
            border-radius: 50px;
            padding-left: 20px;
            outline: none;
          }
          .goButton {
            background: #f15922;
            color: #fff;
            border: none;
            font-weight: 900;
            padding: 15px 25px;
            border-radius: 50px;
            position: absolute;
            right: 10px;
            top: 7px;
            outline: none;
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
