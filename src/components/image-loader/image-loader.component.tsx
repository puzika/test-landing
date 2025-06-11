import type { Dispatch, SetStateAction } from 'react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadImg from '../../assets/upload-icon.svg';
import ReuploadImg from '../../assets/reupload-icon.svg';
import * as S from './image-loader.styles'

type ImageLoaderProps = {
  description?: string,
  urlData: string | null,
  setUrlData: Dispatch<SetStateAction<string | null>>,
}

export default function ImageLoader({ description, urlData, setUrlData }: ImageLoaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const binaryStr = fileReader.result as string;
        setUrlData(binaryStr);
      }
      fileReader.readAsDataURL(file);
    })
  }, []);

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({ onDrop });

  return (
    <S.ImageLoaderContainer>
      <S.ImageLoader {...getRootProps({ className: 'dropzone'})}>
        <input {...getInputProps()} />
        {
          urlData ? (
            <>
              <S.Preview src={urlData} />
              <S.Icon src={ReuploadImg} />
            </>
          ) : (
            <S.Icon src={UploadImg} />
          )
        }
      </S.ImageLoader>
      <p>{description}</p>
    </S.ImageLoaderContainer>
  )
}