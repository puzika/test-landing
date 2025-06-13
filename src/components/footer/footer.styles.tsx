import styled from "styled-components";
import { responsive } from "../../breakpoints";
import * as vars from '../../variables.styles';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  ${responsive.mb({
    flexDirection: 'column-reverse',
    alignItems: 'stretch'
  })}
`;

export const Step = styled.p`
  color: ${vars.clrFontMuted};
  font-size: 1.6rem;
  margin-right: auto;
`;
