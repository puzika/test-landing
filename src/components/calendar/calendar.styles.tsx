import styled from "styled-components";
import * as vars from '../../variables.styles';

export const DatePicker = styled.div`
  align-self: flex-start;
  position: relative;
`

export const DatePickerField = styled.p`
  text-align: center;
  background-color: transparent;
  border: .1rem solid ${vars.clrFontMuted};
  border-radius: 1rem;
  padding: 1rem 2rem;
`;

type DropdownStyleProps = {
  $open: boolean;
}

export const DatePickerDropdown = styled.div<DropdownStyleProps>`
  position: absolute;
  top: 100%;
  left: 0;
  translate: 0 1rem;
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem 1rem rgba(0, 0, 0, 0.5);

  display: ${({$open}) => $open ? 'block': 'none'};
`;

export const DatePickerDates = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 4rem);
  grid-auto-rows: 4rem;
`;

export const DatePickerCell = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5rem;
  transition: background-color .2s;

  &:hover {
    background-color: ${vars.clrFocus};
    color: white;
  }
`;

export const DatePickerWeek = styled.div`
  display: flex;
  margin-bottom: 1rem;

  & > * {
    flex: 1;
    font-size: 1.6rem;
    color: #aaa;
    text-align: center;
  }
`;

export const DatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.5rem;
`

export const DatePickerMonthYear = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 2.5rem;
`;

export const DatePickerMonth = styled.span`
  font-size: inherit;
  text-transform: capitalize;
`;

export const DatePickerYear = styled.input`
  width: 8rem;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  color: #aaa;
  text-align: center;
  padding: .5rem 1rem;
  border: none;
  border-radius: .5rem;
  outline: none;

  &:hover,
  &:focus {
    background-color: #ddd;
  }

  &:focus {
    outline: .1rem solid ${vars.clrFocus};
  }
`;

type BtnStyleProps = {
  $type: 'prev' | 'next';
}

export const Btn = styled.span<BtnStyleProps>`
  position: relative;
  width: 2rem;
  aspect-ratio: 1;
  transition: background-color .2s;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    border-left: .1rem solid ${vars.clrBlack};
    border-bottom: .1rem solid ${vars.clrBlack};
    rotate: ${({$type}) => $type === 'prev' ? 45 : -135}deg;
  }
`
