import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import MessagesDropdown from '@app/modules/main/header/messages-dropdown/MessagesDropdown';
import NotificationsDropdown from '@app/modules/main/header/notifications-dropdown/NotificationsDropdown';
import UserDropdown from '@app/modules/main/header/user-dropdown/UserDropdown';

const Header = () => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const navbarVariant = useSelector((state: any) => state.ui.navbarVariant);
  const headerBorder = useSelector((state: any) => state.ui.headerBorder);

  const getContainerClasses = useCallback(() => {
    let classes = `main-header navbar navbar-expand ${navbarVariant}`;
    if (headerBorder) {
      classes = `${classes} border-bottom-0`;
    }
    return classes;
  }, [navbarVariant, headerBorder]);

  return (
    <nav className={getContainerClasses()}>
      <ul className="navbar-nav">
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/tickets" className="nav-link">
            {t<string>('header.label.tickets')}
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/eventos" className="nav-link">
            {t<string>('header.label.eventos')}
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <MessagesDropdown />
        <NotificationsDropdown />
        <UserDropdown />
      </ul>
    </nav>
  );
};

export default Header;
