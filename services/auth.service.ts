import axios from 'axios';
import Cookies from 'js-cookie';
import Route from 'next/router';

export const TOKEN_STORAGE_KEY = 'token';
export const USER_STORAGE_KEY = 'userName';

class AuthService {
  static getUserAuthHeader = () => {
    const token = Cookies.get(TOKEN_STORAGE_KEY);
    return {
      Authorization: 'Bearer ' + token,
    };
  };

  static handleLogin = async (email, password) => {
    const result = await axios.post('http://localhost:8000/api/user/auth', {
      email,
      password,
    });

    if (result.status !== 200) alert('Please try to login again.');

    if (result.status === 200) {
      Cookies.set(TOKEN_STORAGE_KEY, result.data.token);
      Cookies.set(USER_STORAGE_KEY, result.data.user_name);
      Route.push('/dashboard');
    }
  };
}
export default AuthService;
