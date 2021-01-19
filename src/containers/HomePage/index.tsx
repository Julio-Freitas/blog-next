import Head from 'next/head';
import Link from 'next/link';

import { SITE_NAME } from '../../config/config';
import { PostData } from '../../domain/posts/post';
import { PaginationData } from '../../domain/posts/pagination';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import Pagination from '../../components/Pagination';

import * as Styled from './style';

export type HomeProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};
export default function HomePage({ posts, category, pagination }: HomeProps) {
  return (
    <>
      <Head>
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}
          {pagination?.nextPage && ` - Página ${pagination.nextPage - 1}`}
        </title>
      </Head>
      <Header />
      <MainContainer>
        {category && (
          <Styled.TitleCategory>Categoria: {category}</Styled.TitleCategory>
        )}
        <Styled.Container>
          {posts.map((post, index) => (
            <PostCard
              key={`${index}-${post.slug}`}
              title={post.title}
              slug={post.slug}
              cover={
                post.cover.formats.small ? post.cover.formats.small.url : ''
              }
              published={post.created_at}
            />
          ))}
        </Styled.Container>

        <Pagination {...pagination} />
        {!pagination?.nextPage && (
          <Link href="/post/page/[...param]" as="/post/page/1" passHref>
            <Styled.AllPostsLinks>Ver todos os posts</Styled.AllPostsLinks>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
