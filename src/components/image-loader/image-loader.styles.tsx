import styled from "styled-components";
import * as vars from '../../variables.styles';

export const ImageLoader = styled.div`
  position: relative;
  width: 35rem;
  height: 25rem;
  background-color: ${vars.clrUploader};
  border-radius: 2rem;
  overflow: hidden;
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
`

