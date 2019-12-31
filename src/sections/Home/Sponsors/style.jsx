import styled from "styled-components";

const SponsorsStyle = styled.div`
  height: 300px;
  background: #a5d8ce;
  padding: 40px 400px;

  h2 {
    display: flex;
    justify-content: center;
    opacity: 0.8;
  }

  .sponsors {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0px;
    .single {
      text-align: center;
      p {
        margin: 10px 0px;
      }

      svg {
        width: 70px;
        height: 70px;
      }
    }
  }
`;

export default SponsorsStyle;
