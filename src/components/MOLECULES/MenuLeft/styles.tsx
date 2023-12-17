import styled, { keyframes, css } from "styled-components";
import { TMenuLeft } from "@/types";
type isMenuActiveType = {
  active: boolean | undefined;
};
const AnimatedFadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const AnimatedFadeOut = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;
const AnimatedMenuIn = keyframes`
  from{
    transform: translateX(-500px);
  }
  to{
    transform: translateX(0px);
  }
`;
const AnimatedMenuOut = keyframes`
  from{
    transform: translateX(0px);
  }
  to{
    transform: translateX(-500px);
  }
`;
export const Wrapper = styled.div<TMenuLeft>`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 50;
  display: ${({ visibleMenuLeft }) => (visibleMenuLeft ? "flex" : "none")};
  background: #171023;
  backdrop-filter: blur(1rem);
  flex-direction: column;
  animation: ${(props) =>
    props.active
      ? css`
          ${AnimatedMenuOut} 0.25s
        `
      : css`
          ${AnimatedMenuIn} 0.15s
        `};

  .contentMenuLeft {
    padding: 5rem 1rem;
    width: 75%;
    height: 100%;
    background-color: #2c243b;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    animation: ${(props) =>
      props.active
        ? css`
            ${AnimatedMenuOut} 0.25s
          `
        : css`
            ${AnimatedMenuIn} 0.55s
          `};
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      animation: ${(props) =>
        props.active
          ? css`
              ${AnimatedMenuOut} 1s
            `
          : css`
              ${AnimatedMenuIn} 1s
            `};
      h2 {
        font-size: 1.5rem;
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

    .bodyMenuLeft {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 2rem;
      .optionText {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        animation: ${(props) =>
          props.active
            ? css`
                ${AnimatedMenuOut} 1s
              `
            : css`
                ${AnimatedMenuIn} 1s
              `};

        h3 {
          color: #e4f3d8;
        }
      }
    }

    .footer {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      svg {
        animation: ${(props) =>
          props.active
            ? css`
                ${AnimatedMenuOut} 1.5s
              `
            : css`
                ${AnimatedMenuIn} 1.5s
              `};
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
