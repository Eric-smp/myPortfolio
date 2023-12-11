import styled from "styled-components";
import { TMenuLeft } from "@/types";
export const Wrapper = styled.div<TMenuLeft>`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 10;
  display: ${({ visibleMenuLeft }) => (visibleMenuLeft ? "flex" : "none")};
  background: #ff00aa3d;
  backdrop-filter: blur(1rem);
  flex-direction: column;

  .contentMenuLeft {
    padding: 5rem 1rem;
    width: 75%;
    height: 100%;
    background-color: #832883;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      h2 {
        font-size: 1.5rem;
        color: #e4f3d8;
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

        h3 {
          color: #e4f3d8;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
