import { useState } from 'react';

import { HeaderDropdown } from './HeaderDropdown';
import { HeaderButton } from './HeaderButton';
import UserIcon from '../../assets/icons/white-user-icon.svg?react';
import InfoIcon from '../../assets/icons/info-icon.svg?react';
import ShevronIcon from '../../assets/icons/chevron-right-white.svg?react';
import MoonIcon from '../../assets/icons/moon1.svg?react';
import SunIcon from '../../assets/icons/sun.svg?react';
import { DARK, HEADER_DROPDOWN_OPTIONS, LIGHT } from '../../utils/constants';
import { useTheme } from '../../hooks/useTheme';

import styles from './Header.module.scss';

export const Header = () => {
  const [isUserPageOpen, setIsUserPageOpen] = useState(false);
  const { theme, setTheme } = useTheme(LIGHT);

  const isLightTheme = theme === LIGHT;

  const showInfoHandler = () => {};
  const showUserPageHandler = () => {
    setIsUserPageOpen(prev => !prev);
  };

  return (
    <>
      {!isUserPageOpen && (
        <header className={styles.header}>
          <HeaderDropdown
            options={HEADER_DROPDOWN_OPTIONS}
          />

          <div className={styles.header__buttons}>
            <HeaderButton icon={<InfoIcon />} onClick={showInfoHandler} />

            <HeaderButton icon={<UserIcon />} onClick={showUserPageHandler} />
          </div>
        </header>
      )}

      {isUserPageOpen && (
          <header  className={styles.header}>
            <HeaderButton
              icon={<ShevronIcon className={styles.header__back} />}
              onClick={showUserPageHandler}
            />

            <h2 className={styles.header__profile}>Профиль</h2>

            {
              isLightTheme
              ? (<HeaderButton icon={<MoonIcon />} onClick={() => setTheme(DARK)} />)
              : (<HeaderButton icon={<SunIcon />} onClick={() => setTheme(LIGHT)} />)
            }
          </header>
        )}
    </>
  );
};

