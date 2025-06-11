import styled from "styled-components";
import * as vars from '../../variables.styles';

export const TestContainer = styled.section`
  padding: ${vars.contentPadding};
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;