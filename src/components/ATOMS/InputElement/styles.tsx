import styled from "styled-components";

export const InputStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500&display=swap");

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    color: #fff;
    display: flex;
    width: 100%;
    padding: 0.75rem 1rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid #7dffaf;
    font-family: "Heebo", sans-serif;

    background: #171023;

    &:focus {
      /* border: 5px solid red; */
    }
  }

  textarea {
    display: flex;
    width: 100%;
    height: 10rem;
    padding: 0.75rem 1rem;
    align-items: flex-start;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid #7dffaf;
    background: #171023;
    color: #fff;
    font-family: "Heebo", sans-serif;
  }
  ::placeholder {
    color: #cdd0d4;
    /* font-family: Heebo; */
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }
`;
