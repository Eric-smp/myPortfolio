import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0.5rem;
  .Content {
    width: 100%;
    height: auto;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 1rem;
    justify-content: space-between;
    background-color: #2c243b;

    .textBody {
      width: 100%;
    }
    .formContent {
      width: 100%;
      /* margin: 1rem; */
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: auto;
    padding: 2rem 0.5rem;
    .Content {
      display: flex;
      flex-direction: row;
      padding: 3rem 1rem;
      justify-content: space-around;

      .textBody {
        width: 30rem;
      }

      .formContent {
        width: 50rem;

        display: flex;
        flex-wrap: wrap;
      }
    }
  }
`;
