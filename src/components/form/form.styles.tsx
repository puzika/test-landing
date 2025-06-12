import styled from "styled-components";
import * as vars from '../../variables.styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type InputStyleProps = {
  $type: string
}

export const InputField = styled.input<InputStyleProps>`
  align-self: ${({$type}) => $type === 'text' ? 'stretch' : 'flex-start' };
  font-size: inherit;
  font-style: inherit;
  color: inherit;
  background-color: transparent;
  padding: 1rem 1.5rem;
  border: .1rem solid ${vars.clrFontMuted};
  border-radius: .5rem;
  outline: none;
  transition: border-color .2s;

  &:focus,
  &:hover {
    border-color: ${vars.clrFocus};
  }
`;

export const Row = styled.input`
  display: flex;
  align-items: center;
  gap: 2rem;
`