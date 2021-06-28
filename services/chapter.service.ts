import axios from 'axios';
import AuthService from './auth.service';
import UrlService from './url.service';

class ChapterService {
  static saveChapter = async (data) => {
    const authHeaders = AuthService.getUserAuthHeader();
    const result = await axios.post(UrlService.CHAPTER_ADD, data, {
      headers: authHeaders,
    });
    if (result.status === 201) return result;
  };
}
export default ChapterService;
