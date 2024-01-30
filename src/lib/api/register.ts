import { error } from '@sveltejs/kit';
import fetcher from './fetcher';
import type { IRegister } from '$types/register.types';

const register = async ({ body, cookies }: IRegister) => {
  try {
    const response = await fetcher({ url: `auth/register`, method: 'POST', body: body });
    if (response.status === 200) {
      const { access_token } = await response.data;
      const list = cookies.getAll();
      console.log('response.ok:', list);
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

export default register;
