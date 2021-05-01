import axios from 'axios';
import Cookies from 'js-cookie';

export const TOKEN_STORAGE_KEY = 'token';
export const USER_STORAGE_KEY = 'userName';

class AuthService {
  static handleLogin = async (email, password) => {
    const result = await axios.post('http://localhost:8000/api/user/auth', {
      email,
      password,
    });

    if (result.status !== 200) alert('Please try to login again.');

    if (result.status === 200) {
      Cookies.set(TOKEN_STORAGE_KEY, result.data.token);
      Cookies.set(USER_STORAGE_KEY, result.data.user_name);
    }
  };
}
export default AuthService;
