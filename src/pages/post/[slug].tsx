import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';
import * as Styled from './style';

export type DynamicProps = {
  post: PostData[];
};

const DynamicPost = ({ post }: DynamicProps): ReactElement => {
  return <Styled.Container>slug {console.log(post)} </Styled.Container>;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts('');
  const posts = await getAllPosts(`_limit=${numberOfPosts}`);
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (contenxt) => {
  const { slug } = contenxt.params;
  const post = await getPost(slug);
  return {
    props: { post: post[0] },
  };
};
