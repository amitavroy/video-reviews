import axios from 'axios';
import UrlService from './url.service';

class UserService {
  static createUser = async (postData) => {
    const resp = await axios.post(UrlService.REGISTRATION_URL, postData);
    if (resp.status === 201) return true;
  };
}

export default UserService;
