import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { addAnswer, removeAnswer } from '../../slices/test.slice'
import Heading from '../heading/heading.component'
import Radiogroup from '../radiogroup/radiogroup.component'
import * as S from './form.styles'

const fieldnames = {
  childname: 'Имя ребенка',
  birthdate: 'Дата рождения ребенка',
  sex: 'Пол ребенка',
  parentname: 'Имя родителя, заполняющего анкету',
};

export const formSize = Object.keys(fieldnames).length; 

export default function Form() {
  const dispatch = useAppDispatch();
  const [childname, setChildname] = useState<string>('');
  const [parentname, setParentname] = useState<string>('');
  const [birthdate, setBirthdate] = useState<string>('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>, fieldname: string, setter: Dispatch<SetStateAction<string>>): void => {
    const {value} = e.target;
    setter(value);

    if (value.length > 0) dispatch(addAnswer({ question: fieldname, answer: value}));
    else dispatch(removeAnswer(fieldname));
  }

  return (
    <S.Form>
      <Heading title='Общая информация о ребенке' marginBottom={2} />
      <S.Item>
        <span>{fieldnames.childname}</span>
        <S.InputField value={childname} onChange={e => handleChange(e, fieldnames.childname, setChildname)} type='text' $type='text'/>
      </S.Item>
      <S.Item>
        <span>{fieldnames.birthdate}</span>
        <S.InputField value={birthdate} onChange={e => handleChange(e, fieldnames.birthdate, setBirthdate)} type='date' $type='date'/>
      </S.Item>
      <S.Item>
        <span>{fieldnames.sex}</span>
        <Radiogroup radios={[{ name: 'gender', value: 'Мужской' }, { name: 'gender', value: 'Женский' }]} />
      </S.Item>
      <S.Item>
        <span>{fieldnames.parentname}</span>
        <S.InputField value={parentname} onChange={e => handleChange(e, fieldnames.parentname, setParentname)} type='text' $type='text'/>
      </S.Item>
    </S.Form>
  )
}