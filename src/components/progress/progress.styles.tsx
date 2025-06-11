import styled from "styled-components";
import * as vars from '../../variables.styles';

type BarStyleProps = {
  $progress?: number, 
}

export const Bar = styled.div<BarStyleProps>`
  width: 100%;
  height: 2rem;
  background-image: linear-gradient(
    90deg, 
    ${vars.clrPrimary} 0% ${({ $progress }) => $progress ?? 0}%,
    ${vars.clrPrimaryLtr} ${({ $progress }) => $progress ?? 0}% 100%
  );
`;