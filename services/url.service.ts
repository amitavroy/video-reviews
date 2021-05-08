const baseUrl = 'https://murmuring-atoll-20012.herokuapp.com/';

const UrlService = {
  LOGIN_URL: baseUrl + 'api/user/auth',
  VIDEO_LIST: baseUrl + 'api/videos/list',
  VIDEO_ADD: baseUrl + 'api/video/add',
};

export default UrlService;
