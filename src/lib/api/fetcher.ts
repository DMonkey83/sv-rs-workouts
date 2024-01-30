import { API_BASE_URL } from '$env/static/private';
import type { ILoginBody } from '$types/login.types';
import type { IRegisterBody } from '$types/register.types';
import { ofetch } from 'ofetch';
type IBody = ILoginBody | IRegisterBody;

interface IFetcher {
  url: string;
  method: string;
  auth?: string;
  body: IBody;
  query?: Record<string, string | undefined>;
}

const fetcher = async ({ url, method, auth, query }: IFetcher) => {
  const innerFetch = ofetch.create({
    baseURL: API_BASE_URL,
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`
    },
    query
  });
  return await innerFetch(url, { method });
};

export default fetcher;
