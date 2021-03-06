import axios from 'axios';
import SCookies from 'cookies';
import Cookies from 'js-cookie';
import Route from 'next/router';

import UrlService from './url.service';

export const TOKEN_STORAGE_KEY = 'token';
export const USER_STORAGE_KEY = 'userName';
export const USER_ROLE_KEY = 'userRole';

class AuthService {
  static getUserAuthHeader = () => {
    const token = Cookies.get(TOKEN_STORAGE_KEY);
    return {
      Authorization: 'Bearer ' + token,
    };
  };
  static getUserAuthHeaderServer = (req, res) => {
    const cookies = new SCookies(req, res);
    const token = cookies.get(TOKEN_STORAGE_KEY);
    if (token) {
      return {
        Authorization: 'Bearer ' + token,
      };
    }

    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  };
  static handleLogin = async (email, password) => {
    try {
      const result = await axios.post(UrlService.LOGIN_URL, {
        email,
        password,
      });
      if (result.status === 200) {
        Cookies.set(TOKEN_STORAGE_KEY, result.data.token);
        Cookies.set(USER_STORAGE_KEY, result.data.user_name);
        Cookies.set(USER_ROLE_KEY, result.data.role);
        Route.push('/dashboard');
      }
    } catch (e) {
      if (e.response && e.response.status === 422) return e.response;
      console.error('Cannot login', e.message);
      return false;
    }
  };
  static checkIfAdminRoute = (context, userRole) => {
    const { req } = context;
    if (req?.url.includes('admin') && userRole !== 'admin') {
      context.res.writeHead(302, { Location: '/dashboard' });
      context.res.end();
    }
  };
}
export default AuthService;
