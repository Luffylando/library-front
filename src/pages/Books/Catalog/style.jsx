import styled from "styled-components";
import bg from "../../../assets/imgs/paperBg.jpg";

const CatalogStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 50px 500px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7), 
      rgba(255, 255, 255, 0.7)
    ), url('${bg}');
    position:relative;

    .adminAddBtn {
      width: fit-content;
      position:absolute;
      right: 350px;
      a {
        transition: 0.4s all;
        border: 1px solid #000;
        border-radius: 50px;
        color: #000;
        background: transparent;
        padding: 12px 20px;

      :hover {
        background: #3f5d88;
        color: #fff;
      }
      }
    }


h1 {
  margin: 0px 0px 80px 0px;
  text-align:center;
}
  .book {
    display: flex;
    height: 320px;
    margin-bottom: 40px;

    img {
      height: 300px;
      width: 250px;
      border: 15px solid #3f5d88;
    }

    .bookDesc {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      padding: 10px 20px 20px 50px;

      p {
        font-size: 18px;
        margin: 0px;
        margin-bottom: 10px;
        font-weight: bold;
      }

      .quote {
        margin-bottom: 50px;
      }
    }
    .btn {
      width: 100%;
      text-align:right;

    button {
      border: none;
      border: 1px solid #000;
      background: #3f5d88;
      border-radius: 50px;
      font-size: 16px;
      color: #fff;
      font-weight: bold;
      width: fit-content;  
      padding: 15px 50px;
      cursor:pointer;
    }
    }
  }
`;

export default CatalogStyle;
