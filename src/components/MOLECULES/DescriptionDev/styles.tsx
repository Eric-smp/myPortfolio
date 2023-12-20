import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .textContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: auto;
    padding: 1rem;
    gap: 1rem;
    border-radius: 10px;
    background-color: #2c243b;

    h1 {
      background: var(
        --brand-gradient-horizontal,
        linear-gradient(90deg, #9955e8 0%, #7bffaf 100%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      color: #fff;
    }
  }

  @media only screen and (max-width: 734px) {
    .textContent {
      width: 100%;
    }
  }
`;
