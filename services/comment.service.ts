import axios from 'axios';
import AuthService from './auth.service';
import UrlService from './url.service';

class CommentService {
  static async saveVideoComment(postData) {
    const authHeaders = AuthService.getUserAuthHeader();
    return await axios.post(UrlService.VIDEO_COMMENT, postData, {
      headers: authHeaders,
    });
  }
}

export default CommentService;
