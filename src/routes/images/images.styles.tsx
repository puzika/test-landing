import styled from "styled-components";
import { responsive } from "../../breakpoints";
import * as vars from '../../variables.styles';

export const Images = styled.section`
  padding: ${vars.contentPadding};
  ${responsive.lp({
    padding: vars.contentPaddingLp,
  })}
  ${responsive.tb({
    padding: vars.contentPaddingTb,
  })}
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImagesContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 5rem 0 15rem;
  ${responsive.tb`
    margin: 3rem 0 9rem;
  `}

  ${
    responsive.mb`
      flex-direction: column;
      justify-content: flex-start;
      gap: 2rem;

      & > * {
        width: 100%;
      }
    `
  }
`;