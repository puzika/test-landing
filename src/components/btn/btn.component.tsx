import type { ReactNode } from 'react';
import * as S from './btn.styles';

export type BtnType = 'next' | 'previous' | 'disabled';

type BtnProps = {
  children?: ReactNode,
  clickHandler?: () => void,
  btnType: BtnType
}

export default function Btn({ clickHandler, btnType, children }: BtnProps) {
  if (!clickHandler) return <S.Btn $btnType={btnType}>{ children }</S.Btn>

  return <S.Btn $btnType={btnType} onClick={clickHandler}>{ children }</S.Btn>
}