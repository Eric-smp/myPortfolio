import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 1rem 1rem 0rem 1rem;
  gap: 2rem;

  .content {
    width: 100%;
    height: auto;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    background-color: #2c243b;
    gap: 1rem;
    h1 {
      color: #fff;
    }
    p {
      font-size: 1rem;
      color: #cdd0d4;
    }
  }
  h1 {
    color: #fff;
  }

  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem 1rem 0rem 1rem;
    /* background-color: red; */
    /* padding: 1rem 1rem 0rem 1rem; */

    .content {
      width: 50rem;
      padding: 1.5rem 5rem;
    }
  }
`;
