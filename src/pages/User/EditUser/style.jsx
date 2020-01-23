import styled from "styled-components";

const EditUserStyle = styled.div`
  min-height: calc(100vh - 215px);
  padding: 75px 400px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0px 30px 0px;

    .labelInput {
      width: 350px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 0px;
      height: 35px;
    }

    label {
      margin-right: 20px;
    }

    input {
      width: 200px;
      border: none;
      border-bottom: 1px solid #000;
      padding: 2.5px 0px;
      outline: none;
    }

    .submitBtn {
      text-align: right;
      width: 100%;
      width: 350px;
      margin-top: 30px;

      button {
        border: none;
        border: 1px solid #000;
        border-radius: 50px;
        padding: 10px 40px;
        width: 100%;
        cursor: pointer;
      }
    }
  }

  .chosenImg {
    width: 300px;
    height: 300px;
  }
`;

export default EditUserStyle;
