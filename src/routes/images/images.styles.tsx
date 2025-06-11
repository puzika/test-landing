import styled from "styled-components";
import * as vars from '../../variables.styles';

export const Images = styled.section`
  padding: ${vars.contentPadding};
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
`;