import { useState } from 'react';
import cn from 'classnames';
import 'animate.css';

import { CURRENCY, MESSAGES, NETWORK } from '../../../utils/constants';

import styles from './ModalForm.module.scss';

import InfoIcon from '../../../assets/icons/info-grey.svg?react';
import { setOnClose } from '../../../utils';
import { FormDropdown } from '../FormDropdown/FormDropdown';

export const ModalForm = ({
  setOnOpen,
  setHasAddress,
  setHasForm,
  subtitle,
  amount,
  buttonTitle,
  sendDataToServer,
  minAmount,
  amountError,
  setIsCloseCurrent,
}) => {
  const [amountInputValue, setAmountInputValue] = useState('');
  const [currencyInputValue, setCurrencyInputValue] = useState('');
  const [networkInputValue, setNetworkInputValue] = useState('');

  const [hasAmountInputError, setHasAmountInputError] = useState(false);
  const [hasCurrencyInputError, setHasCurrencyInputError] = useState(false);
  const [hasNetworkInputError, setHasNetworkInputError] = useState(false);

  const amountInputHandler = (event) => {
    setAmountInputValue(event.target.value);
    setHasAmountInputError(false);
  };

  const currencyInputHandler = (value) => {
    setCurrencyInputValue(value);
    setHasCurrencyInputError(false);
  };

  const networkInputHandler = (value) => {
    setNetworkInputValue(value);
    setHasNetworkInputError(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !!amountInputValue
      && !!currencyInputValue
      && !!networkInputValue
      && Number(amountInputValue) >= minAmount
    ) {
      const data = {
        amountInputValue,
        currencyInputValue,
        networkInputValue,
      };

      sendDataToServer(data);
      setOnOpen(setHasAddress);
      setOnClose(setIsCloseCurrent, setHasForm);
    }

    setHasAmountInputError( !amountInputValue || Number(amountInputValue) < minAmount);
    setHasCurrencyInputError(!currencyInputValue);
    setHasNetworkInputError(!networkInputValue);
  };

  return (
    <form
      className={styles.form}
      onSubmit={formSubmitHandler}
    >
      <h5 className={styles.form__subheader}>
        <InfoIcon className={styles.form__icon} />
        {subtitle}
      </h5>

      <div className={styles.form__section}>
        <label
          htmlFor="amount"
          className={styles.form__label}
        >
          {amount}
        </label>

        <div className={styles['form__input-wrapper']}>
          <input
            className={styles.form__input}
            id="amount"
            type="number"
            placeholder='0'
            value={amountInputValue}
            onChange={amountInputHandler}
          />
        </div>

        {hasAmountInputError && (<p className={cn(
          'animate__animated',
          'animate__fadeInLeft',
          { [styles.error__message]: hasAmountInputError }
          )}>
          {amountError}
        </p>)}
      </div>

      <div className={styles.form__section}>
        <label
          htmlFor="currency"
          className={styles.form__label}
        >
          Валюта
        </label>

        <div className={styles.form__dropdown}>
          <FormDropdown
            inputValue={currencyInputValue}
            onChange={currencyInputHandler}
            options={CURRENCY}
          />
        </div>

        {hasCurrencyInputError && (<p className={cn(
          'animate__animated',
          'animate__fadeInLeft',
          { [styles.error__message]: hasCurrencyInputError },
          { [styles.error__autocomplete]: hasCurrencyInputError }
          )}>
          {MESSAGES.EMPTY_CURRENCY}
        </p>)}
      </div>

      <div className={styles.form__section}>
        <label
          htmlFor="network"
          className={styles.form__label}
        >
          Сеть
        </label>

        <div className={styles.form__dropdown}>
          <FormDropdown
            inputValue={networkInputValue}
            onChange={networkInputHandler}
            options={NETWORK}
          />
        </div>


        {hasNetworkInputError && (<p className={cn(
          'animate__animated',
          'animate__fadeInLeft',
          { [styles.error__message]: hasNetworkInputError },
          { [styles.error__autocomplete]: hasNetworkInputError }
          )}>
          {MESSAGES.EMPTY_NETWORK}
        </p>)}
      </div>

      <button
        type='submit'
        className={styles.form__submit}
        onClick={formSubmitHandler}
      >
        {buttonTitle}
      </button>
    </form>
  );
};
