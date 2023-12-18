import styled from "styled-components";

export const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500&display=swap");

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  img {
    border-radius: 50%;
    border: 2px solid var(--stroke-color-dark-mode, rgba(255, 255, 255, 0.5));
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    width: auto;
    opacity: 1;
  }
  .descricaoContent {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      color: #f5f6f6;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2rem;
      font-family: "Heebo", sans-serif;
    }
    p {
      color: #cdd0d4;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 150% */
      font-family: "Heebo", sans-serif;
    }
  }

  .iconRedes {
    display: flex;
    gap: 2rem;

    span {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      background: #413a4f;
    }
    svg {
    }
  }
`;
