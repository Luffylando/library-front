import styled from "styled-components";

const FeaturedBook = styled.div`
  z-index: 999;

  .book {
    img {
      background: #344d71;
      border-radius: 5px;
      z-index: 999;
      width: 250px;
      height: 350px;
      padding: 25px;
    }

    .bookTitle {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0px;
      margin-top: 10px;
      color: #344d71;
      font-size: 18px;
      text-transform: capitalize;
      font-weight: bold;
      height: 50px;
      width: 250px;
      padding: 0px 10px;
    }
    .bookAuthor {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0px;
      margin-top: 10px;
      font-size: 16px;
      width: 250px;
      padding: 20px;
    }
  }
`;

export default FeaturedBook;
