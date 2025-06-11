import { useNavigate } from "react-router";
import { routes } from "../root/root.route";
import Btn from "../../components/btn/btn.component";
import * as S from './home.styles';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(routes.images);
  }

  return (
    <S.Home>
      <Btn btnType='next' clickHandler={handleClick}>Начать тест</Btn>
    </S.Home>
  )
}