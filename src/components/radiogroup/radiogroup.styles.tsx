import styled from "styled-components";
import { responsive } from "../../breakpoints";

export const Radiogroup = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  ${responsive.tb`
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  `}
`;