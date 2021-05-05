import axios from 'axios';
import AuthService from './auth.service';

class VideoService {
  static fetchUserVideos = async () => {
    const authHeaders = AuthService.getUserAuthHeader();
    const result = await axios.get('http://localhost:8000/api/videos/list', {
      headers: authHeaders,
    });

    if (result.status === 200) return result;
  };
}
export default VideoService;
