import styled from "styled-components";
import * as vars from '../../variables.styles';

export const Warning = styled.div`
  display: grid;
  row-gap: 1.5rem;
  column-gap: 2.5rem;
  grid-template-columns: 5rem 1fr;
  background-color: ${vars.clrWarningLt};
  line-height: 150%;
  padding: 4rem;
  border-radius: 1rem;
`;

export const WarningImg = styled.img`
  width: 100%;
`