import axios from 'axios';
import AuthService from './auth.service';
import UrlService from './url.service';

export interface IVideoSubmitReq {
  url: string;
  title: string;
  description: string;
}
class VideoService {
  static fetchUserVideos = async () => {
    const authHeaders = AuthService.getUserAuthHeader();
    const result = await axios.get(UrlService.VIDEO_LIST, {
      headers: authHeaders,
    });

    if (result.status === 200) return result;
  };
  static submitVideo = async (postData: IVideoSubmitReq) => {
    const authHeaders = AuthService.getUserAuthHeader();

    const result = await axios.post(UrlService.VIDEO_ADD, postData, {
      headers: authHeaders,
    });

    return result;
  };
}
export default VideoService;
