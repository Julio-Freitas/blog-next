import { SITE_NAME } from '../../config/config';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Heading from '../../components/Heading';
import PostContainer from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';
import Comments from '../../components/Comments';

import { PostData } from '../../domain/posts/post';
import * as Styled from './style';
import removeHtml from '../../utils/removeHtml';

export type PostProps = {
  post: PostData;
};
export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <Head>
        <title>
          {SITE_NAME} - {post.slug}
        </title>
        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>
      <Styled.Container>
        <Heading>
          <Styled.Title>{post.title}</Styled.Title>
        </Heading>
        <PostCover coverUrl={post.cover.formats.medium.url} alt={post.title} />

        <PostDetails
          author={post.author.name}
          date={post.created_at}
          category={post.category.name}
        />
        <PostContainer content={post.content} />
        <Comments slug={post.slug} title={post.title} />
      </Styled.Container>
      <Footer />
    </>
  );
}
