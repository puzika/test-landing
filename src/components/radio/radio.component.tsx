import * as S from './radio.styles';

export type RadioProps = {
  name: string,
  value: string,
}

export default function Radio({ name, value }: RadioProps) {
  return (
    <S.Radio>
      <S.RadioBtn type='radio' name={name} value={value} />
      <S.CustomRadioBtn />
      <p>{value}</p>
    </S.Radio>
  )
}