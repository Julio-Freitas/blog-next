import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';
import { getAllPosts } from '../data/posts/get-all-posts';
import HomePage from '../containers/HomePage';

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts('_sort=id:desc&_start=0&_limit=10');
  return {
    props: { posts },
  };
};

export type HomeProps = {
  posts: PostData[];
};
const Home = ({ posts }: HomeProps): ReactElement => {
  return <HomePage posts={posts} />;
};
export default Home;
