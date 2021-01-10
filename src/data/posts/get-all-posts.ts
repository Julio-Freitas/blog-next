import { POSTS_URL } from '../../config/config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../service/fetch-json';

export async function getAllPosts(query = ''): Promise<PostData[]> {
  const url = `${POSTS_URL}?&${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
}
