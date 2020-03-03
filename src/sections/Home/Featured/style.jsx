import styled from "styled-components";
import bg from "../../../assets/imgs/paperBg.jpg";

const FeaturedStyle = styled.div`
height: 100vh;
background-image: linear-gradient(
      rgba(255, 255, 255, 0.8), 
      rgba(255, 255, 255, 0.8)
    ), url('${bg}');


    padding: 200px 400px;

    .titleSection {
      .mainTitle {
        font-size: 40px;
        font-weight: bold;
        text-align:center;
      }
      .subTitle {
        line-height: 70px;
        color: gray;
        font-size: 30px;
        font-weight: bold;
        text-align:center;
      }
    }

    .booksSection {
      .subnav {
          padding: 50px 0px;
        ul {
        display: flex;
          list-style-type:none;

          li {
            margin-right: 15px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            text-transform:uppercase;

            :hover {
              text-decoration:underline;
            }
          }
        }
      }

      .books {
        display: flex;
        justify-content:space-between;
        align-items:center;
        position:relative;
        
/* 
        .book {
          z-index: 999;

            img {
              background: #344D71;
              border-radius: 5px;
              z-index: 999;
              width: 250px;
              height: 350px;
              padding: 25px;
            }

            .bookTitle {
              display: flex;
              align-items:center;
              justify-content:center;
              text-align:center;
              margin: 0px;
              margin-top: 10px;
              color: #344D71;
              font-size: 18px;
              text-transform:capitalize;
              font-weight: bold;
              height: 50px;
              width: 250px;
              padding: 0px 10px;
            }
            .bookAuthor {
              display: flex;
              align-items:center;
              justify-content:center;
              text-align:center;
              margin: 0px;
              margin-top: 10px;
              font-size: 16px;
              width: 250px;
              padding: 20px;

            }
        } */

        .absoluteTriangle {
          width: 0; 
          height: 0; 
          position:absolute;
          transform: rotate(45deg);
          top: -55px;
          right: -130px;
          border-left: 150px solid transparent;
          border-right: 150px solid transparent;
          border-bottom: 150px solid #78CBC2;
          }
      }
    }
`;

export default FeaturedStyle;
