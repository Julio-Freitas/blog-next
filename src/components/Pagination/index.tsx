import Link from 'next/link';
import { PaginationData } from '../../domain/posts/pagination';
import * as Styled from './style';

export type PaginationProps = PaginationData;

const Pagination = ({
  nextPage,
  numberOfPost,
  category,
  previousPage,
  postPerPage,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postPerPage < postPerPage + numberOfPost;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Styled.Container>
      {hasPreviousPage && (
        <Styled.PreviousLink>
          <Link as={previousLink} href="/post/page/[...param]">
            <a>Previous</a>
          </Link>
        </Styled.PreviousLink>
      )}
      {hasNextPage && (
        <Styled.NextLink>
          <Link as={nextLink} href="/post/page/[...param]">
            <a>Next</a>
          </Link>
        </Styled.NextLink>
      )}
    </Styled.Container>
  );
};

export default Pagination;
