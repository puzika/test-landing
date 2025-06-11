import type { ReactNode } from 'react';
import { useLocation } from 'react-router';
import type { RoutesType } from '../../routes/root/root.route';
import * as S from './footer.styles';

type FooterProps = {
  children?: ReactNode,
}

export default function Footer({ children }: FooterProps) {
  const location = useLocation();
  const currRoute = location.pathname.slice(1) as RoutesType;
  const routeIndices: Record<RoutesType, number> = {
    'root': 0,
    'images': 1,
    'test': 2,
    'results': 3
  }

  return (
    <S.Footer>
      <S.Step>Шаг {routeIndices[currRoute]}/3</S.Step>
      {children}
    </S.Footer>
  )
}