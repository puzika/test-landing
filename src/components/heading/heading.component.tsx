import * as S from './heading.styles';

type HeadingProps = {
  title: string,
  marginLeft?: number,
  marginRight?: number,
  marginTop?: number,
  marginBottom?: number,
}

export default function Heading({ title, marginLeft, marginRight, marginBottom, marginTop }: HeadingProps) {
  return (
    <S.Heading 
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $marginRight={marginRight}
      $marginTop={marginTop}
    >
      { title }
    </S.Heading>
  )
}