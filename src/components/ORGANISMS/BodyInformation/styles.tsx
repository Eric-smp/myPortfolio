import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem 0rem 1.5rem;
  gap: 3rem;
  .footer {
    display: flex;
    gap: 1rem;
    svg {
      cursor: pointer;
    }
  }
`;
