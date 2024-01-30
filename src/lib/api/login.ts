import { error } from '@sveltejs/kit';
import fetcher from './fetcher';
import type { ILogin } from '$types/login.types';

const login = async ({ body, cookies }: ILogin) => {
  try {
    const response = await fetcher({ url: `auth/login`, method: 'POST', body: body });
    if (response.status === 200) {
      const { access_token } = await response.data;
      cookies.set('access_token', access_token, {
        path: '/',
        sameSite: 'lax',
        maxAge: 60 * 60
      });
    }
  } catch (err) {
    console.log('Error:', err);
    throw error(500, `Something went wrong. ${err}`);
  }
};

export default login;
