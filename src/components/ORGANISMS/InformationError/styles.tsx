import styled from "styled-components";

export const Content = styled.div`
  width: auto;
  height: 100vh;
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4rem;

  .exit {
    top: 1rem;
    left: 1rem;
    position: absolute;

    span {
      h1 {
        color: #fff;
      }
    }
  }

  .figureError {
    h1 {
      color: #fff;
      font-size: 8rem;
    }
  }

  .textError {
    h1 {
      color: #fff;
      font-size: 8rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    .figureError {
      h1 {
        color: #fff;
        font-size: 4rem;
      }
    }

    .textError {
      h1 {
        color: #fff;
        font-size: 4rem;
      }
    }
  }
`;
