import axios from 'axios';
import AuthService from './auth.service';
import UrlService from './url.service';

class CourseService {
  static saveCourse = async (data) => {
    const authHeaders = AuthService.getUserAuthHeader();
    const result = await axios.post(UrlService.COURSE_ADD, data, {
      headers: authHeaders,
    });
    if (result.status === 201) return result;
  };
  static async getMyCourses() {
    const authHeaders = AuthService.getUserAuthHeader();
    const result = await axios.get(UrlService.MY_COURSES, {
      headers: authHeaders,
    });

    return result;
  }
}
export default CourseService;
