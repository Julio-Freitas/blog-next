import { POSTS_URL } from '../../config/config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../service/fetch-json';

export async function getPost(slug: string | string[]): Promise<PostData[]> {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?slug=${slugString}`;
  const postSingle = await fetchJson<PostData[]>(url);
  return postSingle;
}
