import styled from "styled-components";
import { responsive } from "../../breakpoints";
import * as vars from '../../variables.styles';

export const Results = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  padding: ${vars.contentPadding};
  ${responsive.lp({
    padding: vars.contentPaddingLp
  })}
  ${responsive.tb({
    padding: vars.contentPaddingTb
  })}
`;

export const ResultsSection = styled.section`
  position: relative;
  padding: 2rem 0 5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  &::after {
    content: '- - -';
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const ResultsSectionContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`