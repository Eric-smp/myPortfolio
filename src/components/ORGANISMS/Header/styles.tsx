import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  background-color: red;
  background: transparent;
  backdrop-filter: blur(1rem);
  border-bottom: 0.0625rem solid #e4f3d8;
  border-radius: 0.125rem;

  .titleHeader {
    h1 {
      color: #e4f3d8;
    }
  }
  .iconOpenMenuMobile {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .iconOpenMenuMobile {
      display: flex;
    }
    .textNavegation {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    .iconPortifolio {
      display: none;
    }
  }
`;
