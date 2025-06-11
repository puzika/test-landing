import styled from "styled-components";

type HeadingStyleProps = {
  $marginBottom?: number, 
  $marginTop?: number,
  $marginLeft?: number,
  $marginRight?: number,
}

export const Heading = styled.h3<HeadingStyleProps>`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: ${({$marginBottom}) => $marginBottom ?? 0 }rem;
  margin-top: ${({$marginTop}) => $marginTop ?? 0}rem;
  margin-left: ${({$marginLeft}) => $marginLeft ?? 0}rem;
  margin-right: ${({$marginRight}) => $marginRight ?? 0}rem;
`;