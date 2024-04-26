import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import ChevronIcon from '../../../assets/icons/chevron-right-grey.svg?react';

import styles from './FormDropdown.module.scss';

export const FormDropdown = ({ options, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const dropdownRef = useRef();

  const toggleDropdown = () => {
    event.preventDefault();

    setIsDropdownOpen(prev => !prev);
  };

  const selectOptionHandler = (event, option) => {
    event.preventDefault();

    setSelectedOption(option);
    onChange(option);

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
        onClick={(event) => toggleDropdown(event)}
      >
        <p>
          <span>{selectedOption}</span>
        </p>

        {<ChevronIcon className={cn(
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
        {options.map(option => (
          <li key={option.id}>
            <button
              type='button'
              onClick={(event) => selectOptionHandler(event, option.label)}
              className={styles.dropdown__option}
            >
              <span>{option.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
