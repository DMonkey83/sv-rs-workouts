import type { Cookies } from '@sveltejs/kit';
import type { RoleCodeEnum } from './enums';

export interface IRegisterBody {
	username: string;
	password_hash: string;
  role_code: RoleCodeEnum;
}
export interface IRegister {
	cookies: Cookies;
	body: IRegisterBody;
}
