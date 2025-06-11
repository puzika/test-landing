import WarningImg from '../../assets/warning-icon.svg';
import * as S from './warning-small.styles'

type WarningSmallProps = {
  content: string,
}

export default function WarningSmall({ content }: WarningSmallProps) {
  return (
    <S.Warning>
      <S.WarningIcon src={WarningImg} />
      <S.WarningContent>{ content }</S.WarningContent>
    </S.Warning>
  )
}