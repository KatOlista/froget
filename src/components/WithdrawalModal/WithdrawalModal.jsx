import { useState } from 'react';
import cn from 'classnames';

import { HeaderSection, ModalMainButton, SuccessSection, ModalForm } from '../';

import styles from './WithdrawalModal.module.scss';

import LoadingIcon from '../../assets/icons/loader-icon-white.svg?react';
import InfoIcon from '../../assets/icons/info-grey.svg?react';
import { getRefillWithdrawalTitle } from '../../utils/services/getRefillWithdrawalTitle';
import { MESSAGES, MIN_WITHDRAWAL_AMOUNT } from '../../utils/constants';

export const WithdrawalModal = ({ setHasFooter }) => {
  const [hasForm, setHasForm] = useState(false);
  const [hasAddress, setHasAddress] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [walletInputValue, setWalletInputValue] = useState('');
  const [hasWalletInputError, setHasWalletInputError] = useState(false);

  const walletInputHandler = (event) => {
    setWalletInputValue(event.target.value);
    setHasWalletInputError(false);
  };

  setTimeout(() => {
    setIsLoading(false)
  }, 3000);

  const setSuccessHandler = () => {
    if (walletInputValue) {
      //////send data to server, when loading setIsLoading(true), after: setIsLoading(false) setHasSuccess(true); setHasAddress(false);

      setHasSuccess(true);
      setHasAddress(false);
    }

    if (!walletInputValue) {
      setHasWalletInputError(true);
      
      return;
    }
  };

  const closeHandler = () => {
    setHasFooter(false);
    setHasForm(false);
    setHasSuccess(false);
  };

  const sendDataToServer = () => {

    //////code for sending data from ModalForm component
  };

  return (
    <>
      <HeaderSection
          hasForm={hasForm}
          setHasForm={setHasForm}
          hasSuccess={hasSuccess}
          closeHandler={closeHandler}
          hasAddress={hasAddress}
          getModalTitle={getRefillWithdrawalTitle}
      />

      {!hasForm && !hasSuccess && !hasAddress && (
        <ModalMainButton onClick={setHasForm} />
      )}

      {hasForm && (
        <ModalForm
          setHasAddress={setHasAddress}
          setHasForm={setHasForm}
          subtitle='Mинимальная сумма вывода 10$'
          amount='Сумма вывода в $'
          buttonTitle='Вывод'
          sendDataToServer={sendDataToServer}
          minAmount={MIN_WITHDRAWAL_AMOUNT}
          amountError={MESSAGES.EMPTY_WITHDRAWAL_AMOUNT_INPUT}
        />
      )}

      {hasAddress && (
        <div>
          <div className={styles.withdrawal__section}>
            <label
              htmlFor="wallet"
              className={styles.withdrawal__label}
            >
              Адрес кошелька для вывода
            </label>

            <input
              className={styles.withdrawal__input}
              id="wallet"
              type="text"
              value={walletInputValue}
              onChange={walletInputHandler}
            />

            {hasWalletInputError && (<p className={cn(
              'animate__animated',
              'animate__fadeInLeft',
              { [styles.error__message]: hasWalletInputError }
              )}>
              {MESSAGES.EMPTY_WITHDRAWAL_INPUT}
            </p>)}
          </div>

          <ModalMainButton
            onClick={setSuccessHandler}
            isDisabled={isLoading}
            content={
              isLoading
                ? (<LoadingIcon className={styles.withdrawal__loader} />)
                : 'Вывод'
            }
          />

          <div className={`${styles.withdrawal__subheader} ${styles.withdrawal__info}`}>
            <div>
              <InfoIcon />
            </div>

            <p>Внимание: проверьте адрес кошелька и сеть перед отправкой средств.
              После отправки полной суммы на указанный Вами адрес, нажмите кнопку «вывод»
            </p>
          </div>
        </div>
      )}

      {hasSuccess && (
        <SuccessSection closeHandler={closeHandler} />
      )}
    </>
  );
};

