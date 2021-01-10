import Link from 'next/link';
import { SITE_NAME } from '../../config/config';
import * as Styled from './style';

export default function Header() {
  return (
    <Styled.Container>
      <Link href="/">
        <a>{SITE_NAME}</a>
      </Link>
    </Styled.Container>
  );
}
