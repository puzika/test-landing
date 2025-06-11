import type { RadioProps } from '../radio/radio.component';
import Radio from '../radio/radio.component';
import * as S from './radiogroup.styles';

type RadiogroupProps = {
  radios: RadioProps[],
}

export default function Radiogroup({ radios }: RadiogroupProps) {
  return (
    <S.Radiogroup>
      {
        radios.map(({ name, value }) => <Radio key={crypto.randomUUID()} name={name} value={value} />)
      }
    </S.Radiogroup>
  )
}