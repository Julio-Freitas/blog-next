import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import { PostData } from '../../domain/posts/post';
import * as Styled from './style';
export type HomeProps = {
  posts: PostData[];
};
export default function HomePage({ posts }: HomeProps) {
  return (
    <>
      <Header />
      <MainContainer>
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
