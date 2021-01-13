import { ReactElement } from 'react';
import * as Styled from './style';

export type propsProps = {
  coverUrl: string;
  alt: string;
};
export default function PostCover({ coverUrl, alt }: propsProps): ReactElement {
  return <Styled.Container src={coverUrl} alt={alt} />;
}
