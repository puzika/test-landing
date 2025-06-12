import { useState, type ChangeEvent } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addAnswer, removeAnswer } from '../../slices/test.slice';
import * as S from './textarea.styles';

type TextAreaProps = {
  question?: string,
}

export default function TextArea({ question }: TextAreaProps ) {
  const dispatch = useAppDispatch();
  const [val, setVal] = useState<string>('');
  
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    setVal(value);

    if (!question) return;

    if (value.length > 0) dispatch(addAnswer({ question, answer: value }));
    else dispatch(removeAnswer(question));
  }

  return (
    <S.TextArea onChange={handleChange} value={val}></S.TextArea>
  )
}