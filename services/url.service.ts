const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

const UrlService = {
  USER_VERIFICATION: baseUrl + 'api/user/verify',
  REGISTRATION_URL: baseUrl + 'api/user/register',
  LOGOUT_URL: baseUrl + 'api/user/logout',
  LOGIN_URL: baseUrl + 'api/user/auth',
  VIDEO_LIST: baseUrl + 'api/videos/list',
  VIDEO_ADD: baseUrl + 'api/video/add',
  VIDEO_VIEW: baseUrl + 'api/video/',
  VIDEO_COMMENT: baseUrl + 'api/video/comment',
  LIKE_ENTITY: baseUrl + 'api/like',
};

export default UrlService;
