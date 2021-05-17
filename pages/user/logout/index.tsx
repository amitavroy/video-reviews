import axios from 'axios';
import Cookies from 'cookies';
import cookies from 'next-cookies';

import {
  TOKEN_STORAGE_KEY,
  USER_STORAGE_KEY,
} from '../../../services/auth.service';
import UrlService from '../../../services/url.service';

const LogoutPage = () => {
  return <div>Logging you out.</div>;
};

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res);
  const token = cookies.get(TOKEN_STORAGE_KEY);
  if (token) {
    await axios.get(UrlService.LOGOUT_URL, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    cookies.set(TOKEN_STORAGE_KEY, '');
    cookies.set(USER_STORAGE_KEY, '');
  }

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default LogoutPage;
