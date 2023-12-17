import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem 0rem 1rem;

  .textContent {
    width: 20rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    header {
      h1 {
        font-family: "Kalam", cursive;
        background: var(
          --brand-gradient-horizontal,
          linear-gradient(90deg, #9955e8 0%, #7bffaf 100%)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    body {
      width: 100%;
      display: flex;
      p {
        color: #ffffff;
      }
    }

    footer {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 8rem;

    .textContent {
      width: 30rem;
    }
  }
`;
