import axios from 'axios';
import Cookies from 'cookies';
import {
  TOKEN_STORAGE_KEY,
  USER_STORAGE_KEY,
} from '../../../services/auth.service';
import UrlService from '../../../services/url.service';

const EmailVerificationPage = () => {
  return <div>This is where verification will happen.</div>;
};
export async function getServerSideProps(context) {
  const { token } = context.params;
  const { req, res } = context;
  const resp = await axios.get(UrlService.USER_VERIFICATION + `/${token}`);
  if (resp.status === 200) {
    const cookies = new Cookies(req, res);
    cookies.set(TOKEN_STORAGE_KEY, resp.data.token, { httpOnly: false });
    cookies.set(USER_STORAGE_KEY, resp.data.user_name, { httpOnly: false });
    res.setHeader('location', '/dashboard');
    res.statusCode = 302;
  } else {
    res.setHeader('location', '/login');
    res.statusCode = 302;
  }
  res.end();
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default EmailVerificationPage;
