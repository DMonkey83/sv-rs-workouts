import type { Cookies } from '@sveltejs/kit';

export interface ILoginBody {
	username: string;
	password: string;
}
export interface ILogin {
	cookies: Cookies;
	body: ILoginBody;
}

