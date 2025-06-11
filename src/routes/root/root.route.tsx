import { Outlet } from "react-router";
import Progress from "../../components/progress/progress.component";
import * as S from './root.styles';

export type RoutesType = 'root' | 'images' | 'test' | 'results';

export const routes: Record<RoutesType, RoutesType> = {
  'root': 'root',
  'images': 'images',
  'results': 'results',
  'test': 'test',
}

export default function Root() {
  return (
    <S.Root>
      <Progress />
      <Outlet />
    </S.Root>
  )
}