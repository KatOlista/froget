import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';import
cn from 'classnames';
import 'animate.css';

import { selectBalance } from '../../../redux/features/balanceSlice';

import ShevronIcon from '../../../assets/icons/chevron-right-white.svg?react';
import {
  USD_SYMBOL,
  
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
    console.log(selectedBalance)
    dispatch(selectBalance(option));

    toggleDropdown();
  }

  const user = useSelector(state => state.user.user);
  var deposit_balance;
  var bonus_balance;
  if (user){
    bonus_balance = user.bonus_balance;
    deposit_balance = user.deposit_balance;
  } 
  useEffect(() => {
 function handleClickOutside(event) {
      if (dropdownRef.current
        && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    
  
    /*  var deposit_balance = ((user['deposit_balance']))
         var bonus_balance = (user['bonus_balance']) */
   
      
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

          {selectedBalance.balance === 'mainBalance' ? (
  // Если условие истинно
  deposit_balance
) : (
  // Если условие не истинно
  bonus_balance
)}  
        </p>

        {<ShevronIcon className={cn(
            styles.dropdown__icon,
            { [styles.dropdown__open]: isDropdownOpen },
          )}
        />}
      </button>

      {isDropdownOpen && (
        <ul
          className={cn(
            styles.dropdown__options,
            'animate__animated',
            'animate__fadeInLeft',
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
                {option.balance === 'mainBalance' ? (
  // Если условие истинно
  deposit_balance
) : (
  // Если условие не истинно
  bonus_balance
)}

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
