import { Comments } from '../../components/Comments';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import PostContainer from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';

import { PostData } from '../../domain/posts/post';
import * as Styled from './style';
export type PostProps = {
  post: PostData;
};
export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <Styled.Container>
        <Heading>
          <h2>{post.title}</h2>
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
