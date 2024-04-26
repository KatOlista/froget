import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import ShevronIcon from '../../../assets/icons/chevron-right-white.svg?react';

import styles from './FormDropdown.module.scss';

export const FormDropdown = ({ options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

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
        className={cn(
          styles.dropdown__button,
          { [styles['active-btn']]: isDropdownOpen }
        )}
        onClick={toggleDropdown}
      >
        <p>
          <span>{selectedOption}</span>
        </p>

        {<ShevronIcon className={cn(
            styles.dropdown__icon,
            { [styles.dropdown__open]: isDropdownOpen },
          )}
        />}
      </button>

      <ul
        className={cn(
          styles.dropdown__options,
          { [styles.active]: isDropdownOpen }
        )}
      >
        {options.map(option => {
          return (
          <li key={option.id}>
            <div
              onClick={() => selectOptionHandler(option)}
              className={styles.dropdown__option}
            >
              <span>{option.label}</span>
            </div>
          </li>
        )})}
      </ul>
    </div>
  );
};
