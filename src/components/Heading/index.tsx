import { ReactElement } from 'react';
import * as Styled from './style';

export type PropsHeading = {
  children: React.ReactNode;
};

export default function Heading({ children }: PropsHeading): ReactElement {
  return <Styled.Container>{children}</Styled.Container>;
}
