import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
