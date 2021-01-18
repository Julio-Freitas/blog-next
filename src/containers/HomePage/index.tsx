import { SITE_NAME } from '../../config/config';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';

import { PostData } from '../../domain/posts/post';
import * as Styled from './style';
export type HomeProps = {
  posts: PostData[];
  category?: string;
};
export default function HomePage({ posts, category }: HomeProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Diste desenvolvido em next" />
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
              cover={post.cover.formats.small.url}
              published={post.created_at}
            />
          ))}
        </Styled.Container>
      </MainContainer>
      <Footer />
    </>
  );
}
