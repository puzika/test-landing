import GreatImg from '../../assets/great-icon.svg';
import FlagImg from '../../assets/flag-icon.svg';
import * as S from './warning.styles';

export default function Warning() {
  return (
    <S.Warning>
      <S.WarningImg src={GreatImg} alt={'great sign'}/>
      <p>Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее подходящий вариант ответа, отражающий поведение и эмоциональное состояние вашего ребенка в течение последних 2-4 недель. Отвечайте максимально честно и искренне, так как от этого зависит точность оценки психоэмоционального развития Вашего ребенка.</p>
      <S.WarningImg src={FlagImg} alt={'flag'} />
      <p>Все вопросы обязательны к заполнению</p>
    </S.Warning>
  )
}