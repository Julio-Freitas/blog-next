import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { PostData } from '../../domain/posts/post';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';

export type PropsCategory = {
  posts: PostData[];
  category: string;
};

export default function Category({
  posts,
  category,
}: PropsCategory): ReactElement {
  return <HomePage posts={posts} category={category} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query;
  const url = `_sort=id:desc&_start=0&_limit=3&category.name_contains=${category}`;
  const posts = await getAllPosts(url);
  return {
    props: {
      posts,
      category,
    },
  };
};
