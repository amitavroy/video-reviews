import { Component } from 'react';
import Cookies from 'cookies';
import {
  TOKEN_STORAGE_KEY,
  USER_STORAGE_KEY,
} from '../../services/auth.service';

export function ProtectedRoute(WrapperComponent: any) {
  return class extends Component {
    static async getInitialProps(ctx) {
      const cookies = new Cookies(ctx.req, ctx.res);
      const token = cookies.get(TOKEN_STORAGE_KEY);
      if (!token) {
        // const route = '/login?dest=' + ctx.asPath;
        const route = '/login';
        if (ctx.res) {
          ctx.res.writeHead(302, { Location: route });
          ctx.res.end();
        }
        if (window) window.location.replace(route);
        return;
      }
      const initialProps = {
        token,
        userName: cookies.get(USER_STORAGE_KEY),
        query: ctx.query,
        asPath: ctx.asPath,
      };
      if (WrapperComponent.getInitialProps)
        return WrapperComponent.getInitialProps(initialProps);

      return initialProps;
    }
    render() {
      const { ...propsWithoutAuth } = this.props;
      return <WrapperComponent {...propsWithoutAuth} />;
    }
  };
}
