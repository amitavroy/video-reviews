import Link from 'next/link';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

export interface IDropdownItem {
  type: 'link' | 'separator';
  name?: string;
  href?: string;
}

interface DropdownProps {
  items: Array<IDropdownItem>;
  dropdownName: string;
}

interface ItemProps {
  item: IDropdownItem;
}

const DropdwonLink: React.FC<ItemProps> = ({ item }) => {
  return (
    <li>
      <Link href={item.href}>
        <a className="dropdown-item">{item.name}</a>
      </Link>
    </li>
  );
};

const DropdwonSeparator = () => {
  return (
    <li>
      <hr className="dropdown-divider" />
    </li>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ items, dropdownName }) => {
  const [open, setOpen] = useState(false);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        open == true && setOpen(!open);
      }}
    >
      <li className={'nav-item dropdown ' + (open ? 'show' : '')}>
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          {dropdownName}
        </a>
        <ul
          className={'dropdown-menu ' + (open ? 'show' : '')}
          aria-labelledby="navbarDropdown"
        >
          {items.length > 0 &&
            items.map((item, index) => {
              return item.type === 'link' ? (
                <DropdwonLink item={item} key={index} />
              ) : (
                <DropdwonSeparator key={index} />
              );
            })}
        </ul>
      </li>
    </OutsideClickHandler>
  );
};
export default Dropdown;
