import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;600&display=swap");

  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: transparent;
  backdrop-filter: blur(1rem);
  border-bottom: 0.0625rem solid #e4f3d8;
  border-radius: 0.125rem;

  .titleHeader {
    h1 {
      color: #e4f3d8;
      font-family: "Roboto Mono", monospace;
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
