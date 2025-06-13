import { useEffect, useState, useMemo } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectAnswers } from '../../slices/test.slice';
import { useNavigate } from 'react-router';
import { routes } from '../root/root.route';
import { formSize } from '../../components/form/form.component';
import Form from '../../components/form/form.component';
import Warning from '../../components/warning/warning.component';
import Section, { type SectionProps } from '../../components/section/section.component';
import Footer from '../../components/footer/footer.component';
import Btn from '../../components/btn/btn.component';
import LeftArrow from '../../assets/arrow-left.svg';
import DoubleRightArrowEnabled from '../../assets/double-right-enabled.svg';
import DoubleRightArrowDisabled from '../../assets/double-right-disabled.svg';
import * as S from './test.styles';

type Test = SectionProps[];

export default function Test() {
  const navigate = useNavigate();
  const answers = useAppSelector(selectAnswers);
  const answeredCount = Object.keys(answers).length;
  const [test, setState] = useState<Test | null>(null);

  useEffect(() => {
    const getTest = async() => {
      const res = await fetch('/data/db.json');
      const data = await res.json() as Test;
      setState(data);
    }

    getTest();
  }, []);

  const questionCount = useMemo(() => {
    if (!test) return Infinity;

    let cnt = 0;

    for (const section of test) cnt += section.questions.length;

    return cnt + formSize;
  }, [test])

  const testContent = useMemo(() => test?.map(section => <Section key={crypto.randomUUID()} {...section} />), [test]);
  const handleClick = () => navigate(`/${routes.results}`);

  const btn = answeredCount === questionCount ? 
    <Btn btnType='next' clickHandler={handleClick}><span>Узнать результаты</span><img src={DoubleRightArrowEnabled} alt="next" /></Btn> :
    <Btn btnType='disabled'><span>Узнать результаты</span><img src={DoubleRightArrowDisabled} alt="next" /></Btn>;

  return (
    <S.TestContainer>
      <Form />
      <Warning />
      { testContent }
      <Footer>
        <Btn btnType='previous' clickHandler={() => navigate(`/${routes.images}`)}>
          <img src={LeftArrow} alt="previous" />
          <span>К загрузке рисунков</span>
        </Btn>
        { btn }
      </Footer>
    </S.TestContainer>
  )
}