import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addAnswer } from '../../slices/test.slice';
import type { ChangeEvent, ReactNode } from 'react';
import * as S from './calendar.styles'

const months = ["январь", "февраль", "апрель", "март", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
const weekdays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

function formatDate(day: number, month: number, year: number) {
  const fday = `${day}`.padStart(2, '0');
  const fmonth = `${month + 1}`.padStart(2, '0');

  return `${fday}.${fmonth}.${year}`;
}

type DatePickerProps = {
  name: string,
}

export default function DatePicker({ name }: DatePickerProps) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [day, setDay] = useState<number>(new Date().getDate());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const hideCalendar = (e: globalThis.MouseEvent) => {
      const target = e.target as HTMLElement;
      const isCalender = !!target.closest('.calendar');

      if (isCalender) return;

      setOpen(false);
    }

    document.addEventListener('click', hideCalendar);

    return () => document.removeEventListener('click', hideCalendar);
  }, []);

  useEffect(() => {
    dispatch(addAnswer({ question: name, answer: formatDate(day, month, year)}))
  }, [day, month, year]);

  const firstDay = new Date(year, month, 1).getDay();
  const daysinMonth = new Date(year, month + 1, 0).getDate();
  const dates: ReactNode[] = [];

  for (let i = 0, date = 1; i < 35; i++) {
    if (firstDay <= i && date <= daysinMonth) {

      const clickHandler = () => {
        setDay(date - 1);
        setOpen(false);
      }

      dates.push(<S.DatePickerCell onClick={clickHandler} key={i}>{date}</S.DatePickerCell>);
      date++;
    } else dates.push(<span key={i}></span>);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (!isFinite(value)) {
      setYear(new Date().getFullYear());
      return;
    }

    setYear(value);
  }

  return (
    <S.DatePicker className='calendar'>
      <S.DatePickerField onClick={() => setOpen(!open)}>{formatDate(day, month, year)}</S.DatePickerField>
      <S.DatePickerDropdown $open={open}>
        <S.DatePickerHeader>
          <S.Btn $type='prev' onClick={() => {
            setDay(1);
            setMonth(month - 1 < 0 ? 11 : month - 1)
            if (month - 1 < 0) setYear(year - 1);
          }} />
          <S.DatePickerMonthYear>
            <S.DatePickerMonth>{ months[month] }</S.DatePickerMonth>
            <S.DatePickerYear value={year} onChange={handleChange} />
          </S.DatePickerMonthYear>
          <S.Btn $type='next' onClick={() => {
            setDay(1);
            setMonth(month + 1 > 11 ? 0 : month + 1);
            if (month + 1 > 11) setYear(year + 1);
          }} />
        </S.DatePickerHeader>
        <S.DatePickerWeek>
          { weekdays.map(d => <p key={d}>{d}</p>)}
        </S.DatePickerWeek>
        <S.DatePickerDates>
          {dates}
        </S.DatePickerDates>
      </S.DatePickerDropdown>
    </S.DatePicker>
  )
}