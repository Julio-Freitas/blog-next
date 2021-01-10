export const fetchJson = async <T>(url: string): Promise<T> => {
  const reponse = await fetch(url);
  const responseJson = await reponse.json();
  return responseJson;
};
