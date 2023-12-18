import styled from "styled-components";

export const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500&display=swap");

  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 1rem 1rem;
  background-color: #171023;

  .titleAndIcon {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      display: none;
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

  .FooterNav {
    width: 100%;
    display: flex;
    gap: 2rem;
    a {
      font-family: "Heebo", sans-serif;
      color: #cdd0d4;

      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 150% */
      text-decoration: none;
      font-style: none;
    }
  }

  @media only screen and (min-width: 764px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .titleAndIcon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;

      h3 {
        display: flex;
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
    .FooterNav {
      width: auto;
      display: flex;
      gap: 2rem;
      a {
        font-family: "Heebo", sans-serif;
        color: #cdd0d4;

        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 150% */
        text-decoration: none;
        font-style: none;
      }
    }
  }
`;
