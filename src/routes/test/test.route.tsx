import { useEffect, useState, useMemo } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectAnswers } from '../../slices/test.slice';
import type { RadioProps } from '../../components/radio/radio.component';
import { useNavigate } from 'react-router';
import { routes } from '../root/root.route';
import Form from '../../components/form/form.component';
import Heading from '../../components/heading/heading.component';
import Radiogroup from '../../components/radiogroup/radiogroup.component';
import TextArea from '../../components/textarea/textarea.component';
import Footer from '../../components/footer/footer.component';
import Btn from '../../components/btn/btn.component';
import LeftArrow from '../../assets/arrow-left.svg';
import DoubleRightArrowEnabled from '../../assets/double-right-enabled.svg';
import DoubleRightArrowDisabled from '../../assets/double-right-disabled.svg';
import * as S from './test.styles';

type Question = {
  question: string,
  questiontype: 'multiple' | 'text',
  options: string[],
}

type Section = {
  id: number,
  section: string,
  questions: Question[],
}

type Test = Section[];

export default function Test() {
  const navigate = useNavigate();
  const answers = useAppSelector(selectAnswers);
  const [test, setState] = useState<Test | null>(null);

  console.log(answers);

  useEffect(() => {
    const getTest = async() => {
      const res = await fetch('/data/db.json');
      const data = await res.json() as Test;
      setState(data);
    }

    getTest();
  }, []);

  const testContent = useMemo(() => (test?.map(({ section, questions, id }) => (
    <S.Section key={id}>
      <Heading title={`Раздел ${id}: ${section}`} />
      {
        questions.map(({ question, questiontype, options }) => {
          const questionId = `${question}${crypto.randomUUID()}`;

          return ((
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
          ))
        })
      }
    </S.Section>
  ))), [test]);

  return (
    <S.TestContainer>
      <Form />
      {
        testContent
      }
      <Footer>
        <Btn btnType='previous' clickHandler={() => navigate(`/${routes.images}`)}>
          <img src={LeftArrow} alt="previous" />
          <span>К загрузке рисунков</span>
        </Btn>
        <Btn btnType='disabled'>Узнать результаты</Btn>
      </Footer>
    </S.TestContainer>
  )
}