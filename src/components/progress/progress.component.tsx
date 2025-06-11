import { useLocation } from 'react-router'
import type { RoutesType } from '../../routes/root/root.route'
import * as S from './progress.styles'

export default function Progress() {
  const location = useLocation();
  const progress: Record<RoutesType, number> = {
    'root': 0,
    'images': 33,
    'test': 66,
    'results': 100,
  };

  const currRoute = location.pathname.slice(1) as RoutesType;

  return (
    <S.Bar $progress={progress[currRoute]}/>
  )
}