import { TButton } from "@/types";
import styled from "styled-components";

export const Content = styled.button<TButton>`
  width: 22.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  cursor: pointer;

  h2 {
    color: #fff;
    text-align: center;
    /* text-md */
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
  }
`;
