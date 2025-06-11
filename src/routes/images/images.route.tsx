import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { routes } from "../root/root.route";
import Heading from "../../components/heading/heading.component";
import WarningSmall from "../../components/warning-small/warning-small.component";
import ImageLoader from "../../components/image-loader/image-loader.component";
import Footer from "../../components/footer/footer.component";
import Btn from "../../components/btn/btn.component";
import ArrowRightEnabled from '../../assets/arrow-right-enabled.svg';
import ArrowRightDisabled from '../../assets/arrow-right-disabled.svg';
import { usePostImagesMutation } from "../../api/apiSlice";
import type { BtnType } from "../../components/btn/btn.component";
import * as S from './images.styles';

export default function Images() {
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [btnType, setBtnType] = useState<BtnType>('disabled');
  const [first, setFirst] = useState<string | null>(null);
  const [second, setSecond] = useState<string | null>(null);
  const [third, setThird] = useState<string | null>(null);

  useEffect(() => {
    if (first && second && third) setBtnType('next');
    else setBtnType('disabled');
  }, [first, second, third]);

  const [postImages] = usePostImagesMutation();

  const handleClick = async (): Promise<void> => {
    if (!form.current || btnType === 'disabled') return;

    const formData = new FormData(form.current);
    formData.append('first', first as string);
    formData.append('second', second as string);
    formData.append('third', third as string);
    
    try {
      await postImages(formData).unwrap();
    } catch (err) {
      console.log(err);
    }

    navigate(`/${routes.test}`);
  }

  return (
    <S.Images>
      <Heading title="Загрузите фотографии рисунков" marginBottom={1.5} />
      <WarningSmall content="Допустимые форматы файлов: jpg, jpeg, png, pdf. Размер не более 5 Мб" />
      <S.ImagesContainer ref={form}>
        <ImageLoader urlData={first} setUrlData={setFirst} description="Дом, дерево, человек" />
        <ImageLoader urlData={second} setUrlData={setSecond} description="Несуществующее животное" />
        <ImageLoader urlData={third} setUrlData={setThird} description="Автопортрет" />
      </S.ImagesContainer>
      <Footer>
        <Btn btnType={btnType} clickHandler={handleClick}>
          <span>Далее</span>
          {
            btnType === 'next' ? <img src={ArrowRightEnabled} alt="next" /> : <img src={ArrowRightDisabled} alt="next" />
          }
        </Btn>
      </Footer>
    </S.Images>
  )
}