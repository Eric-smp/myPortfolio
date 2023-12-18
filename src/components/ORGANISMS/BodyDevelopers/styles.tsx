import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 1rem 0rem 1rem;

  .projetct {
    width: 100%;
    height: 30rem;
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
      border: 1px solid #9955e8;
    }
    ::-webkit-scrollbar {
      width: 0.3125rem;
      background-color: #9955e8;
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
        background-color: #9955e8;
        border-radius: 20px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #7dffaf;
        border-radius: 0.625rem;
      }
    }
  }
`;
