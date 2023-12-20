import styled from "styled-components";
import { TContacts } from "@/types";
export const InputStyle = styled.div<TContacts>`
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500&display=swap");

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;

  .content {
    width: auto;
    .textContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      span {
        cursor: pointer;

        transform: none;
      }
      h1 {
        cursor: pointer;

        font-size: 1.25rem;
        /* font-family: "Hebbo" sans-serif; */
        color: #ffffff;
        font-weight: 500;
      }

      h3 {
        cursor: pointer;
        color: #828282;
        font-family: "Hebbo" sans-serif;
        font-size: 0.9rem;
        font-weight: 300;
        font-style: italic;
      }
    }
  }
`;
