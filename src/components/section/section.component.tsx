import type { QuestionProps } from '../question/question.component';
import Question from '../question/question.component';
import Heading from '../heading/heading.component';
import * as S from './section.styles';

export type SectionProps = {
  id: number,
  section: string,
  questions: QuestionProps[],
}

export default function Section({ section, id, questions }: SectionProps) {
  return (
    <S.Section>
      <Heading title={`Раздел ${id}: ${section}`} />
      {
        questions.map(q => <Question key={crypto.randomUUID()} {...q}/>)
      }
    </S.Section>
  )
}