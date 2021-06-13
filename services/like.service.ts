import axios from 'axios';
import AuthService from './auth.service';
import UrlService from './url.service';

class LikeService {
  static async addLike(postData) {
    const authHeaders = AuthService.getUserAuthHeader();
    return await axios.post(UrlService.LIKE_ENTITY, postData, {
      headers: authHeaders,
    });
  }
}

export default LikeService;
