import { POSTS_URL } from '../../config/config';
import { fetchJson } from '../../service/fetch-json';

export async function countAllPosts(query = ''): Promise<string> {
  const url = `${POSTS_URL}/count?${query}`;
  const numberOfPosts = await fetchJson<string>(url);
  return numberOfPosts;
}
