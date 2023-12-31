import styled from "styled-components";
import { TCard } from "@/types";

export const Content = styled.div<TCard>`
  @import url("https://fonts.googleapis.com/css2?family=Kalnia:wght@300;400;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Rubik+Broken+Fax&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap");

  max-width: 30rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .Card {
    height: 100%;
    width: 30rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    border: 0.125rem solid #7dffaf;
    border-radius: 1.5625rem 0rem 1.5625rem 0rem;

    .iconCard {
      display: flex;

      width: auto;
      height: auto;
      span {
        width: auto;
        height: auto;
      }
    }

    .titleAndDescricao {
      margin-left: 1rem;
      border-left: 0.125rem solid #8a42db;
      padding: 0rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

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
        color: #e4f3d8;
      }
      a {
        font-size: 1.5rem;
        text-decoration: none;
        color: #8a42db;
        font-family: "Inconsolata", monospace;
        font-weight: 700;
        font-style: normal;
        cursor: ${({ urlBlock }) => (urlBlock ? "not-allowed" : "pointer")};
      }
    }

    .linkProject {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      /* background-color: blue; */
    }
  }

  @media only screen and (max-width: 625px) {
    .Card {
      width: 100%;
    }
  }
`;
