import React from 'react';
import { Nav } from '../nav';

interface Props {}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="pb-3">
        <Nav />
      </div>
      <div className="container">{children}</div>
    </React.Fragment>
  );
};
export default Layout;
