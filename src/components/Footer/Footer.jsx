import { useState } from 'react';
import cn from 'classnames';

import { RoundButton, SecondaryButton } from '../';
import { DOUBLE, HALF, MAX, ONE_AND_A_HALF, RATE } from '../../utils/constants';
import styles from './Footer.module.scss';

import MinusIcon from '../../assets/icons/minus-icon.svg?react';
import PlusIcon from '../../assets/icons/plus-icon.svg?react';

export const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const increaseHandler = () => {};
  const decreaseHandler = () => {};
  const doubleHandler = () => {};
  const oneAndAHalfHandler = () => {};
  const halfHandler = () => {};
  const maxHandler = () => {};
  const makeBetHandler = () => {};

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__rate}>
        <div className={styles['footer__rate-management']}>

    {/* input */}
          <div className={styles['footer__add-substract']}>
            <RoundButton icon={(<MinusIcon />)} onClick={increaseHandler} />

            <span>{RATE}</span>

            <RoundButton icon={(<PlusIcon />)} onClick={decreaseHandler} />
          </div>

          <div className={styles['footer__multiple-divide-section']}>
            <div className={styles['footer__math-buttons-container']}>
              <SecondaryButton content={DOUBLE} onClick={doubleHandler} />

              <SecondaryButton content={ONE_AND_A_HALF} onClick={oneAndAHalfHandler} />

              <SecondaryButton content={HALF} onClick={halfHandler} />
            </div>

            <SecondaryButton content={MAX} onClick={maxHandler} />
          </div>
        </div>

        <button className={styles['footer__rate-amount']} onClick={makeBetHandler}>
          СТАВКА
        </button>
      </div>

      <div className={styles.footer__withdrawal}>
        {/* input */}
        <button className='withdrawal-btn'>
          <span className='accent-color'>X</span>
          <span>2.5</span>
        </button>

        <div className={styles['footer__withdrawal-input']}>
          <label
            className={cn(
              styles['footer__withdrawal-label'],
              { [styles.footer__checked]: isChecked },
            )}
          >
            <input
              id='withdrawal'
              type="checkbox"
              className={styles.footer__checkbox}
              onClick={() => setIsChecked(!isChecked)}
            />
          </label>

          <span>Авто-вывод</span>
        </div>
      </div>
    </footer>
  )
};
