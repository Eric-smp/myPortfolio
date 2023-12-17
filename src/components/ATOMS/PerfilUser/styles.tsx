import styled from "styled-components";

export const Content = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .photoPerfil {
    display: flex;
    justify-content: center;
    height: auto;
    width: 100%;
    padding-bottom: 1rem;
    img {
      border-radius: 50%;
      border: 2px solid var(--stroke-color-dark-mode, rgba(255, 255, 255, 0.5));
      background: url(<path-to-image>), lightgray 50% / cover no-repeat;
      width: auto;
      opacity: 1;
    }

    :hover {
      opacity: 0.5;
      border-radius: 50%;
    }
  }

  p {
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    font-style: italic;
  }
`;
