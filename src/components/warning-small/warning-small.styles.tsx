import styled from "styled-components";
import * as vars from '../../variables.styles';

export const Warning = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${vars.clrWarningLtr};
  padding: 1rem 1.5rem;
  border-radius: 10rem;
`;

export const WarningContent = styled.p`
  color: ${vars.clrWarning};
`;

export const WarningIcon = styled.img`
  width: 2rem;
  aspect-ratio: 1;
`