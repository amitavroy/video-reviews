import Link from 'next/link';
import { useRouter } from 'next/router';
import Dropdown, { IDropdownItem } from './dropdown';
const primaryDropdown: Array<IDropdownItem> = [
  { name: 'My videos', type: 'link', href: '/dashboard' },
  { type: 'separator' },
  { name: 'Submit', type: 'link', href: '/video/submit' },
];
const userDropdown: Array<IDropdownItem> = [
  { name: 'My profile', type: 'link', href: '/dashboard' },
  { name: 'Settings', type: 'link', href: '/video/submit' },
  { type: 'separator' },
  { name: 'Logout', type: 'link', href: '/video/submit' },
];
export const Nav = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Video reviews
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarSupportedContent"
        >
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/dashboard">
                  <a
                    className={
                      'nav-link ' +
                      (router.pathname === '/dashboard' ? 'active' : '')
                    }
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/video/submit">
                  <a
                    className={
                      'nav-link ' +
                      (router.pathname === '/video/submit' ? 'active' : '')
                    }
                    aria-current="page"
                  >
                    Submit Video
                  </a>
                </Link>
              </li>
              <Dropdown items={primaryDropdown} dropdownName="Tasks" />
            </ul>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Dropdown items={userDropdown} dropdownName="Amitav Roy" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
