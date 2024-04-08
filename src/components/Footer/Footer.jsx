import { useState } from 'react';
import cn from 'classnames';
import 'animate.css';

import { RoundButton, SecondaryButton } from '../';

import {
  DECREASE,
  DIVIDE,
  DOUBLE,
  HALF,
  INCREASE,
  INITIAL_RATE_VALUE,
  MAX,
  MESSAGES,
  MIN_RATE_INPUT_VALUE,
  MULTIPLY_ONE_AND_A_HALF,
  ONE_AND_A_HALF,
  MULTIPLY_TWICE,
  USER,
  WIN_AMOUNT,
  MAKE_MAX,
  SET_BY_USER,
} from '../../utils/constants';

import styles from './Footer.module.scss';
import { validateInputValue } from '../../utils';
import { useSelector } from 'react-redux';

export const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [rateInputValue, setRateInputValue] = useState('');
  const [multiplierInputValue, setMultiplierInputValue] = useState(INITIAL_RATE_VALUE);
  const [isNotEnoughMoneyError, setIsNotEnoughMoneyError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { selectedBalance } = useSelector(state => state.selectedBalance);
  const userCurrentBalance = USER[selectedBalance.balance];

  const inputRateHandler = (option, customValue) => {
    setIsNotEnoughMoneyError(false);
    let inputValue = Number(rateInputValue);

    switch (option) {
      case INCREASE:
        inputValue++;
        break;
      case DECREASE:
        inputValue--;
        break;
      case DIVIDE:
        inputValue = (inputValue / 2).toFixed(2);
        break;
      case MULTIPLY_ONE_AND_A_HALF:
        inputValue = (inputValue * 1.5).toFixed(2);
        break;
      case MULTIPLY_TWICE:
        inputValue = inputValue * 2;
        break;
      case MAKE_MAX:
        inputValue = userCurrentBalance;
        break;
      case SET_BY_USER:
        inputValue = Number(customValue);
        break;
      default:
        return inputValue;
    }

    const validInput = validateInputValue(
      inputValue,
      MIN_RATE_INPUT_VALUE,
      userCurrentBalance,
      setIsNotEnoughMoneyError,
    );

    setRateInputValue(validInput);
  };

  const makeBetHandler = () => {};
  const formSubmitHandler = () => {};

  return (
    <footer className={styles.footer}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles['footer__rate-section']}>
          <div className={styles['footer__rate-management']}>
            {isNotEnoughMoneyError && (<p className={cn(
              'animate__animated',
              'animate__fadeInLeft',
              { [styles.error__message]: isNotEnoughMoneyError }
              )}>
              {MESSAGES.NOT_ENOUGH_MONEY}
            </p>)}

            <div className={cn(
              styles['footer__add-substract'],
              { [styles['error__no-money']]: isNotEnoughMoneyError },
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
                    <RoundButton onClick={() => inputRateHandler(DECREASE)} />

                    <label className={styles.footer__label}>
                      <input
                        type="number"
                        value={rateInputValue}
                        placeholder='0'
                        onChange={(e) => inputRateHandler(SET_BY_USER, e.target.value)}
                        className={styles.footer__input}
                      />
                    </label>

                    <RoundButton isPlus onClick={() => inputRateHandler(INCREASE)} />
                  </>
                )
              }
            </div>

            <div className={styles['footer__multiple-divide-section']}>
              <div className={styles['footer__math-buttons-container']}>
                <SecondaryButton content={DOUBLE} onClick={() => inputRateHandler(MULTIPLY_TWICE)} />

                <SecondaryButton content={ONE_AND_A_HALF} onClick={() => inputRateHandler(MULTIPLY_ONE_AND_A_HALF)} />

                <SecondaryButton content={HALF} onClick={() => inputRateHandler(DIVIDE)} />
              </div>

              <SecondaryButton content={MAX} onClick={() => inputRateHandler(MAKE_MAX)} />
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
