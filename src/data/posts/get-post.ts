import { POSTS_URL } from '../../config/config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../service/fetch-json';
import { markdownToHtml } from '../../utils/markdownToHtml';

export async function getPost(slug: string | string[]): Promise<PostData[]> {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?slug=${slugString}`;
  const postSingle = await fetchJson<PostData[]>(url);
  const content = await markdownToHtml(postSingle[0].content);
  return [{ ...postSingle[0], content }];
}
