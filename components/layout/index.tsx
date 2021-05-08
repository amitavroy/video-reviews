import React from 'react';
import { Nav } from '../nav';
import Head from 'next/head';

interface Props {
  pageTitle?: string;
}
const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <React.Fragment>
      {pageTitle && (
        <Head>
          <title>{pageTitle}</title>
        </Head>
      )}
      <div className="pb-3">
        <Nav />
      </div>
      <div className="container">{children}</div>
    </React.Fragment>
  );
};
export default Layout;
