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
  COURSE_ADD: baseUrl + 'api/course',
  MY_COURSES: baseUrl + 'api/my-courses',
  GET_COURSE_DETAILS: baseUrl + 'api/course',
  CHAPTER_ADD: baseUrl + 'api/chapter',
  CHAPTER_SEQUENCE_UPDATE: baseUrl + 'api/chapter/sequence-update',
  ADMIN_USER_LIST: baseUrl + 'api/admin/users',
};

export default UrlService;
