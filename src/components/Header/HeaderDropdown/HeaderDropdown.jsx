import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';import
cn from 'classnames';

import { selectBalance } from '../../../redux/features/balanceSlice';

import ShevronIcon from '../../../assets/icons/chevron-right-white.svg?react';
import {
  USD_SYMBOL,
  USER,
} from '../../../utils/constants';

import styles from './HeaderDropdown.module.scss';

export const HeaderDropdown = ({ options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { selectedBalance } = useSelector(state => state.selectedBalance);
  const dispatch = useDispatch();

  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const selectOptionHandler = (option) => {
    dispatch(selectBalance(option));

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
          <span>{USD_SYMBOL}</span>

          {USER[selectedBalance.balance]}
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
          const isSelected = option.balance === selectedBalance.balance;

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
    </div>
  );
};
