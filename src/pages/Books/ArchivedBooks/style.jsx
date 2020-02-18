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
      justify-content:space-between;
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

  }
`;

export default CatalogStyle;
