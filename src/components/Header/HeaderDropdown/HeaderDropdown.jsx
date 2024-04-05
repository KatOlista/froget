import { useEffect, useRef, useState } from 'react';import
cn from 'classnames';

import styles from './HeaderDropdown.module.scss';

import ShevronIcon from '../../../assets/icons/chevron-right-white.svg?react';
import {
  HEADER_DROPDOWN_OPTIONS,
  USD_SYMBOL,
  USER,
} from '../../../utils/constants';

export const HeaderDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(HEADER_DROPDOWN_OPTIONS[0]);

  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const selectOptionHandler = (option) => {
    setSelectedOption(option);

    toggleDropdown();
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current
        && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.dropdown__button}
        onClick={toggleDropdown}
      >
        <p>
          <span>{USD_SYMBOL}</span>

          {USER[selectedOption.balance]}
        </p>

        {<ShevronIcon className={cn(
            styles.dropdown__icon,
            { [styles.dropdown__open]: isDropdownOpen },
          )}
        />}
      </button>

      {isDropdownOpen && (
        <ul className={styles.dropdown__options}>
          {HEADER_DROPDOWN_OPTIONS.map(option => {
            const isSelected = option.balance === selectedOption.balance;

            return (
            <li key={option.balance}>
              <button
                onClick={() => selectOptionHandler(option)}
                className={cn(
                  styles.dropdown__option,
                  { [styles.dropdown__selected]: isSelected },
                )}
              >
                <span>{option.title}</span>

                <p>
                  {USER[option.balance]}
                  <span>{USD_SYMBOL}</span>
                </p>
              </button>
            </li>
          )})}
        </ul>
      )}
    </div>
  );
};
