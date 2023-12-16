import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;

  .projetct {
    width: 100%;
    height: 35rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    .contenctProject {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: #00000043;
      backdrop-filter: blur(1rem);
      overflow-y: scroll;
      border-radius: 0.3125rem;
    }
    ::-webkit-scrollbar {
      width: 0.3125rem;
      background-color: #820081;
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #7dffaf;
      border-radius: 0.625rem;
    }
  }
  @media only screen and (max-width: 1024px) {
    width: 100vw;
    height: 100%;
    padding: 0rem 1rem;

    .projetct {
      width: 100%;
      height: 28rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;

      .contenctProject {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000043;
        backdrop-filter: blur(1rem);
        overflow-y: scroll;
        border-radius: 0.3125rem;
      }
      ::-webkit-scrollbar {
        width: 0.3125rem;
        background-color: #820081;
        border-radius: 20px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #fe1cac;
        border-radius: 0.625rem;
      }
    }
  }
`;
