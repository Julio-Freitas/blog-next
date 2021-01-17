import Link from 'next/link';
import { ReactElement } from 'react';
import { convertDateToPtBR } from '../../utils/formta-date';
import * as Styled from './style';

export type propsPostDatails = {
  author: string | null;
  date: string | null;
  category: string | null;
};
export default function PostDetails({
  author,
  date,
  category,
}: propsPostDatails): ReactElement {
  return (
    <Styled.Container>
      Públicado por {author} em {convertDateToPtBR(date)}, categoria:{' '}
      <Link href={`/categories/${category.toLocaleLowerCase()}`}>
        {category}
      </Link>
    </Styled.Container>
  );
}
