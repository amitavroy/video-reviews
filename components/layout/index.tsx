import React from 'react';
import { Nav } from '../nav';

interface Props {}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      <div className="d-flex flex-row justify-content-center">{children}</div>
    </div>
  );
};
export default Layout;
