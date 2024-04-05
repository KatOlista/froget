import { HeaderButton } from './HeaderButton/HeaderButton';
import styles from './Header.module.scss';

import UserIcon from '../../assets/icons/white-user-icon.svg?react';
import InfoIcon from '../../assets/icons/info-icon.svg?react';
import { HeaderDropdown } from './HeaderDropdown/HeaderDropdown';

export const Header = () => {
  const showInfoHandler = () => {};
  const showUserPageHandler = () => {};

  return (
    <header className={styles.header}>
      <HeaderDropdown />

      <div className={styles.header__buttons}>
        <HeaderButton icon={<InfoIcon />} onClick={showInfoHandler} />

        <HeaderButton icon={<UserIcon />} onClick={showUserPageHandler} />
      </div>
    </header>
  );
};

