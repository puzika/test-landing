import type { RadioProps } from '../radio/radio.component';
import Radiogroup from '../radiogroup/radiogroup.component';
import TextArea from '../textarea/textarea.component';
import * as S from './question.styles';

export type QuestionProps = {
  question: string,
  questiontype: 'multiple' | 'text',
  options: string[],
}

export default function Question({ question, questiontype, options }: QuestionProps) {
  const questionId = `${question}${crypto.randomUUID()}`;
  return (
    <S.Question key={questionId}>
      <p>{question}</p>
      {
        questiontype === 'multiple' ? (
          <Radiogroup radios={options.map(op => ({ name: questionId, value: op } as RadioProps))} />
        ) : (
          <TextArea question={questionId} />
        )
      }
    </S.Question>
  )
}