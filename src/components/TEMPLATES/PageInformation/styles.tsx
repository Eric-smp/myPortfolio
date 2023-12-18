import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  svg {
    position: absolute;
    z-index: 20;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 20;
    overflow-y: hidden;
  }
`;
