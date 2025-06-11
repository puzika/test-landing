import { useEffect, useState } from 'react';
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
  const [test, setState] = useState<Test | null>(null);
  const [answers, setAnswers] = useState<{[key: string]: string}>({});

  console.log(answers);

  useEffect(() => {
    const getTest = async() => {
      const res = await fetch('/public/data/db.json');
      const data = await res.json() as Test;
      setState(data);
    }

    getTest();
  }, []);

  return (
    <S.TestContainer>
      <Form />
      {
        test?.map(({ section, questions, id }) => (
          <S.Section key={id}>
            <Heading title={section} />
            {
              questions.map(({ question, questiontype, options }, idx) => (
                <S.Question key={`${question}${crypto.randomUUID()}`}>
                  <p>{question}</p>
                  {
                    questiontype === 'multiple' ? (
                      <Radiogroup radios={options.map(op => ({ name: `${question}${idx}`, value: op } as RadioProps))} />
                    ) : (
                      <TextArea />
                    )
                  }
                </S.Question>
              ))
            }
          </S.Section>
        ))
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