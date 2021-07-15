import axios from 'axios';
import AuthService from './auth.service';
import UrlService from './url.service';

class UserService {
  static createUser = async (postData) => {
    const resp = await axios.post(UrlService.REGISTRATION_URL, postData);
    if (resp.status === 201) return true;
  };
  static getUserListingForAdmin = async () => {
    const authHeaders = AuthService.getUserAuthHeader();
    const resp = await axios.get(UrlService.ADMIN_USER_LIST, {
      headers: authHeaders,
    });
    if (resp.status === 200) return resp;
  };
}

export default UserService;
