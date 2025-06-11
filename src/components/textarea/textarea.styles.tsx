import styled from "styled-components";
import * as vars from '../../variables.styles';

export const TextArea = styled.textarea`
  resize: none;
  height: 10rem;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  padding: 1rem 2rem;
  border: .1rem solid ${vars.clrFontMuted};
  border-radius: .5rem;
  outline: none;
  transition: border-color .2s;

  &:focus,
  &:hover {
    border-color: ${vars.clrFocus};
  }
`