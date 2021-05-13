const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

const UrlService = {
  USER_VERIFICATION: baseUrl + 'api/user/verify',
  LOGIN_URL: baseUrl + 'api/user/auth',
  VIDEO_LIST: baseUrl + 'api/videos/list',
  VIDEO_ADD: baseUrl + 'api/video/add',
};

export default UrlService;
