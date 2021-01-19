import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import HomePage from '../../../containers/HomePage';
import { countAllPosts } from '../../../data/posts/count-all-posts';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PaginationData } from '../../../domain/posts/pagination';
import { PostData } from '../../../domain/posts/post';

export type PropsPage = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PropsPage) {
  const router = useRouter();
  if (router.isFallback) return <div>Carregando</div>;
  if (!posts.length) return <div>Página nao encontrada</div>;
  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context.params.param[0]);
  const category = context.params.param[1] || '';

  const postPerPage = 3;
  const startFrom = (page - 1) * postPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category ? `&category.name_contains=${category}` : '';
  const mountUrl = `_sort=id:desc&_start=${startFrom}&_limit=${postPerPage}${categoryQuery}`;

  const posts = await getAllPosts(mountUrl);
  const numberOfPost = Number(await countAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    previousPage,
    numberOfPost,
    postPerPage,
    category,
  };
  return {
    props: { posts, category, pagination },
    revalidate: 600,
  };
};
