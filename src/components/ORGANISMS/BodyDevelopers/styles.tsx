import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

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
    }
  }
`;
