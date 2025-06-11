import Heading from '../heading/heading.component'
import Radiogroup from '../radiogroup/radiogroup.component'
import * as S from './form.styles'

export default function Form() {
  return (
    <S.Form>
      <Heading title='Общая информация о ребенке' marginBottom={2} />
      <S.Item>
        <span>Имя ребенка</span>
        <S.InputField type='text' $type='text'/>
      </S.Item>
      <S.Item>
        <span>Дата рождения ребенка</span>
        <S.InputField type='date' $type='date'/>
      </S.Item>
      <S.Item>
        <span>Пол ребенка</span>
        <Radiogroup radios={[{ name: 'gender', value: 'Мужской' }, { name: 'gender', value: 'Женский' }]} />
      </S.Item>
      <S.Item>
        <span>Имя родителя, заполняющего анкету</span>
        <S.InputField type='text' $type='text'/>
      </S.Item>
    </S.Form>
  )
}