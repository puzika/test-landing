import styled from "styled-components";
import { responsive } from "../../breakpoints";
import * as vars from '../../variables.styles';

export const Warning = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${vars.clrWarningLtr};
  padding: 1rem 1.5rem;
  border-radius: 10rem;
  ${responsive.mb`
    border-radius: 1rem;
  `}
`;

export const WarningContent = styled.p`
  color: ${vars.clrWarning};
`;

export const WarningIcon = styled.img`
  width: 2rem;
  aspect-ratio: 1;
`