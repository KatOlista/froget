import { useState } from 'react';
import cn from 'classnames';
import 'animate.css';

import { RoundButton, SecondaryButton } from '../';
import { DOUBLE, HALF, MAX, MESSAGES, ONE_AND_A_HALF, RATE, WIN_AMOUNT } from '../../utils/constants';
import styles from './Footer.module.scss';

export const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [rateInputValue, setRateInputValue] = useState('');
  const [multiplierInputValue, setMultiplierInputValue] = useState(RATE);
  const [isNoMoneyError, setIsNoMoneyError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  setInterval(() => {
    setIsNoMoneyError(true);
  }, 2000);

  const increaseHandler = () => {};
  const decreaseHandler = () => {};
  const doubleHandler = () => {};
  const oneAndAHalfHandler = () => {};
  const halfHandler = () => {};
  const maxHandler = () => {};
  const makeBetHandler = () => {};
  const formSubmitHandler = () => {};

  // const validateRateValue = () => {
  //   setIsNoMoneyError(true);
  // }

  return (
    <footer className={styles.footer}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles['footer__rate-section']}>
          <div className={styles['footer__rate-management']}>
            {isNoMoneyError && (<p className={cn(
              'animate__animated',
              'animate__fadeInLeft',
              // styles.footer__message,
              { [styles.error__message]: isNoMoneyError }
              )}>
              {MESSAGES.NO_MONEY}
            </p>)}

            <div className={cn(
              styles['footer__add-substract'],
              { [styles['error__no-money']]: isNoMoneyError },
              { [styles['success__add-substract']]: isSuccess }
            )}
            >
              {isSuccess
                ? (
                    <div>
                      <p>Выигрыш</p>

                      <span>{WIN_AMOUNT}</span>
                    </div>
                  )
                : (
                  <>
                    <RoundButton onClick={increaseHandler} />

                    <label className={styles.footer__label}>
                      <input
                        type="number"
                        value={rateInputValue}
                        placeholder='0'
                        onChange={(e) => setRateInputValue(e.target.value)}
                        className={styles.footer__input}
                      />
                    </label>

                    <RoundButton isPlus onClick={decreaseHandler} />
                  </>
                )
              }
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
            className={cn(
              styles['footer__submit-btn'],
              { [styles['success__submit-btn']]: isSuccess },
              { [styles.loading]: isLoading },
              { [styles['error__submit-btn']]: isError },
            )}
            onClick={makeBetHandler}
            type='submit'
          >
            {isLoading
              ? (<p>Ожидание..</p>)
              : (<p>СТАВКА</p>)
            }
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
