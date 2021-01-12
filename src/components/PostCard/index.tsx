import Link from 'next/link';
import { ReactElement } from 'react';
import * as util from '../../utils/formta-date';
import * as Styled from './style';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
  published: string;
};

export default function PostCard({
  slug,
  title,
  cover,
  published,
}: PostCardProps): ReactElement {
  return (
    <Styled.Container>
      <Styled.PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            <img src={cover} alt={title} />
          </a>
        </Link>
      </Styled.PostCardCover>
      <Styled.PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </Styled.PostCardHeading>
      <Styled.Published>
        <small>
          {`Públicado ${util.convertDateToPtBR(
            published,
          )} ás  ${util.converteLocaleTime(published)}`}
        </small>
      </Styled.Published>
    </Styled.Container>
  );
}
