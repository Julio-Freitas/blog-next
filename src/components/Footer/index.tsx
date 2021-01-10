import { ReactElement } from 'react';
import Link from 'next/link';
import * as Styled from './style';

export default function Footer(): ReactElement {
  return (
    <Styled.Container>
      <Link href="/">
        <a>Desenvolvido por: Júlio César </a>
      </Link>
    </Styled.Container>
  );
}
