import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addAnswer, selectAnswers } from '../../slices/test.slice';
import * as S from './radio.styles';

export type RadioProps = {
  name: string,
  value: string,
}

export default function Radio({ name, value }: RadioProps) {
  const dispatch = useAppDispatch();
  const answers = useAppSelector(selectAnswers);

  const handleChange = () => {
    dispatch(addAnswer({ question: name, answer: value }));
  }

  return (
    <S.Radio>
      <S.RadioBtn onChange={handleChange} checked={answers[name] === value} type='radio' name={name} value={value} />
      <S.CustomRadioBtn />
      <p>{value}</p>
    </S.Radio>
  )
}