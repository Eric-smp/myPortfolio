import styled from "styled-components";
import { TCard } from "@/types";

export const Content = styled.div<TCard>`
  @import url("https://fonts.googleapis.com/css2?family=Kalnia:wght@300;400;700&display=swap");

  max-width: 30rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: red;
  .Card {
    height: 100%;
    width: 30rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    border: 2px solid #fe1cac;
    border-radius: 25px 0px 25px 0px;

    .iconCard {
      display: flex;

      width: auto;
      height: auto;
      span {
        width: auto;
        height: auto;
      }
    }
    /* .diviser {
            height: 100%;
            margin: 0rem 1rem;
            background-color: blue;
            span {
                height: 100%;
                border-right: 2px solid #ffff;
            }
        } */
    .titleAndDescricao {
      margin-left: 1rem;
      border-left: 2px solid #820081;
      padding: 0rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      h1 {
        color: #e4f3d8;
      }
      p {
        color: #e4f3d8;
      }
      a {
        font-size: 1.5rem;
        text-decoration: none;
        color: #e80560;
        font-family: "Kalnia", serif;
        font-weight: 700;
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
      background-color: red;
    }
  }
`;
