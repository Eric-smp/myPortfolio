import styled from "styled-components";

export const Card = styled.div`
  width: 8rem;
  height: auto;
  /* padding: 1rem 1rem; */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* padding: 1rem 0rem; */
  /* #8A42DB */
  /* #212121 */
  .Content {
    padding: 1rem 0rem;
    border-top-left-radius: 2rem;
    background-color: #212121;
    border-bottom: 3px solid #8a42db;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    h3 {
      font-size: 1.15rem;
      font-weight: 400;
      color: #8a42db;
    }
  }
`;
