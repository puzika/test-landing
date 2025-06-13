import styled from "styled-components";
import { responsive } from "../../breakpoints";
import * as vars from '../../variables.styles';

export const ImageLoader = styled.div`
  position: relative;
  width: 25vw;
  aspect-ratio: 1.5;
  background-color: ${vars.clrUploader};
  border-radius: 2rem;
  overflow: hidden;
  ${responsive.tb`
    width: 28vw;
  `}
  ${responsive.mb`
    width: inherit;
    aspect-ratio: 2.5;
  `}
`
export const ImageLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Preview = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1;
  width: 8rem;

  ${responsive.tbmin`
    width: 6rem;
  `}
`

