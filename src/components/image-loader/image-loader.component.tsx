import type { Dispatch, SetStateAction } from 'react';
import { useCallback } from 'react';
import { useDropzone} from 'react-dropzone';
import type { FileError } from 'react-dropzone';
import UploadImg from '../../assets/upload-icon.svg';
import ReuploadImg from '../../assets/reupload-icon.svg';
import * as S from './image-loader.styles'

type ImageLoaderProps = {
  description?: string,
  urlData: string | null,
  setUrlData: Dispatch<SetStateAction<string | null>>,
}

function validator(file: File): FileError | null {
  const name: string = file.name;
  const dotSeparated: string[] = name.split('.');
  const ext: string = dotSeparated.pop()!;

  const admissibleExtensions: string[] = ['jpg', 'jpeg', 'png', 'pdf'];

  if (!admissibleExtensions.includes(ext)) return { message: 'Inadmissible file type', code: `extension: ${ext}`};

  return null;
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
  } = useDropzone({ onDrop, maxFiles: 1, validator});

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