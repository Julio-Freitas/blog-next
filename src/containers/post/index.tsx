import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';

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

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Styled.Container>
      <Footer />
    </>
  );
}
