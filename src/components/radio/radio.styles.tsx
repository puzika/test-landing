import styled from "styled-components";
import * as vars from '../../variables.styles';

export const Radio = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CustomRadioBtn = styled.div`
  width: 2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${vars.clrRadio};
  transition: all .2s;
`

export const RadioBtn = styled.input`
  display: none;

  &:checked + div {
    background-color: ${vars.clrBase};
    border: .5rem solid ${vars.clrPrimary};
  }
`;