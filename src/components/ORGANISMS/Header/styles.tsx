import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;600&display=swap");

  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: transparent;
  backdrop-filter: blur(1rem);
  box-shadow: 0px 15px 16px 0px rgba(0, 0, 0, 0.25);
  .titleHeader {
    h1 {
      font-family: "Kalam", cursive;
      background: var(
        --brand-gradient-horizontal,
        linear-gradient(90deg, #9955e8 0%, #7bffaf 100%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      cursor: pointer;
    }
  }
  .iconOpenMenuMobile {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .iconOpenMenuMobile {
      display: flex;
    }
    .textNavegation {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    .titleHeader {
      display: none;
    }
  }
`;
