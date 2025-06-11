import styled from "styled-components";
import type { BtnType } from "./btn.component";
import * as vars from '../../variables.styles';

type BtnStyleProps = {
  $btnType: BtnType
}

export const Btn = styled.button<BtnStyleProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: inherit;
  font-family: inherit;
  padding: 1rem 2.4rem;
  border: none;
  border-radius: 10rem;
  outline: none;
  cursor: pointer;
  transition: background-color .2s;
  background-color: ${({$btnType}) => 
    $btnType === 'next' ? vars.clrPrimary :
    $btnType === 'previous' ? vars.clrPrimaryLts :
    vars.clrDisabledBtn
  };
  color: ${({$btnType}) => 
    $btnType === 'next' ? vars.clrBase :
    $btnType === 'previous' ? vars.clrBlack :
    vars.clrDisabled
  };

  &:hover {
    background-color: ${({$btnType}) => 
      $btnType === 'next' ? vars.clrPrimaryDk :
      $btnType === 'previous' ? vars.clrPrimaryLt :
      vars.clrDisabledBtn
    }
  }

  & > img {
    height: 100%;
    object-fit: cover;
  }
`