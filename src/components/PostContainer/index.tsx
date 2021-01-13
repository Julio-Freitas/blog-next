import { ReactElement } from 'react';
import * as Styled from './style';

export type PostContainerProps = {
  content: string;
};

export default function PostContainer({
  content,
}: PostContainerProps): ReactElement {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: content }} />;
}
