import { useState } from 'react';
import cn from 'classnames';

import { RoundButton, SecondaryButton } from '../';
import { DOUBLE, HALF, MAX, ONE_AND_A_HALF, RATE } from '../../utils/constants';
import styles from './Footer.module.scss';

import MinusIcon from '../../assets/icons/minus-icon.svg?react';
import PlusIcon from '../../assets/icons/plus-icon.svg?react';

export const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [rateInputValue, setRateInputValue] = useState(RATE);
  const [multiplierInputValue, setMultiplierInputValue] = useState(2.5);

  const increaseHandler = () => {};
  const decreaseHandler = () => {};
  const doubleHandler = () => {};
  const oneAndAHalfHandler = () => {};
  const halfHandler = () => {};
  const maxHandler = () => {};
  const makeBetHandler = () => {};
  const formSubmitHandler = () => {};

  return (
    <footer className={styles.footer}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles['footer__rate-section']}>
          <div className={styles['footer__rate-management']}>

            <div className={styles['footer__add-substract']}>
              <RoundButton icon={(<MinusIcon />)} onClick={increaseHandler} />

              <label className={styles.footer__label}>
                <input
                  type="number"
                  value={rateInputValue}
                  onChange={(e) => setRateInputValue(e.target.value)}
                  className={styles.footer__input}
                />
              </label>

              <RoundButton icon={(<PlusIcon />)} isPlus onClick={decreaseHandler} />
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

          <button
            className={styles['footer__rate-amount']}
            onClick={makeBetHandler}
            type='submit'
          >
            СТАВКА
          </button>
        </div>

        <div className={styles.footer__withdrawal}>
          <div className={styles.footer__multiplier}>
            <span className={styles['footer__accent-color']}>X</span>

            <label className={styles.footer__label}>
              <input
                type="number"
                value={multiplierInputValue}
                onChange={(e) => setMultiplierInputValue(e.target.value)}
                className={`${styles.footer__input} ${styles['footer__input-multiplier']}`}
              />
            </label>
          </div>

          <div className={styles.footer__checkbox}>
            <label
              className={cn(
                styles['footer__checkbox-label'],
                { [styles.footer__checked]: isChecked },
              )}
            >
              <input
                id='withdrawal'
                type="checkbox"
                className={styles['footer__input-checkbox']}
                onClick={() => setIsChecked(!isChecked)}
              />
            </label>
            <span>Авто-вывод</span>
          </div>
        </div>
      </form>
    </footer>
  )
};
