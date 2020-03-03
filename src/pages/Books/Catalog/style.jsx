import styled from "styled-components";
import bg from "../../../assets/imgs/paperBg.jpg";

const CatalogStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 50px 390px;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7), 
      rgba(255, 255, 255, 0.7)
    ), url('${bg}');
    position:relative;

    .adminAddBtn {
      width: 100%;
      display: flex;
      justify-content:flex-end;
      
     
    }


h1 {
  margin: 0px 0px 40px 0px;
  text-align:center;
}

.booksCatalog {
  margin: 20px 0px;
  display: flex;
  justify-content:center;
  flex-wrap:wrap;


  .noBooks {
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-weight: 600;
    font-size: 18px;
    a {
      margin: 20px;
    }
  }
}
  .book {
    display: flex;
    flex-direction:column;
    height: 320px;
    margin: 40px 15px 60px 15px;

    img {
    border-radius: 5px;
      height: 300px;
      width: 250px;
      border: 15px solid #3f5d88;
    }

    .bookDesc {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      justify-content:space-between;
      width: 250px;


        .title {
          display: flex;
              align-items:center;
              justify-content:center;
          font-size: 18px;
          font-weight: bold;
          text-align:center;
          width: 100%;
          margin-top: 10px;
          margin-bottom: 10px;
          color: #3f5d88;
        
      }

      .author {
        display: flex;
              align-items:center;
              justify-content:center;
        font-size: 16px;
          font-weight: bold;
          text-align:center;
          width: 100%;
          margin: 0px;
      }
    }
  }
`;

export default CatalogStyle;
