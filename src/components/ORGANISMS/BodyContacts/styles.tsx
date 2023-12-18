import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0.5rem;
  .Content {
    width: 100%;
    height: auto;
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    border-radius: 1rem;
    background-color: #2c243b;
    justify-content: space-between;

    .textBody {
      width: 100%;
    }

    .formContent {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: auto;
    .Content {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      .textBody {
        width: 30rem;
      }

      .formContent {
        width: 30.5rem;
        display: flex;
      }
    }
  }
`;
