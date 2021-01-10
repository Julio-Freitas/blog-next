import { ReactElement } from 'react';
import * as Styled from './style';

export type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({
  children,
}: MainContainerProps): ReactElement {
  return <Styled.Container>{children}</Styled.Container>;
}
