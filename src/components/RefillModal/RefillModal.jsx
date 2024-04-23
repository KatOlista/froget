import { useState } from 'react';
import cn from 'classnames';
import Tooltip from '@mui/material/Tooltip';

import { RefillForm } from '../RefillForm/RefillForm';

import styles from './RefillModal.module.scss';

import CloseIcon from '../../assets/icons/close.svg?react';
import ArrowIcon from '../../assets/icons/arrow-left.svg?react';
import WhiteArrowIcon from '../../assets/icons/arrow-right.svg?react';
import { getRefillModalTitle } from '../../utils';
import { createCopy } from '../../utils/services/createCopy';
import { MESSAGES } from '../../utils/constants';

import LoadingIcon from '../../assets/icons/loader-icon-white.svg?react';
import InfoIcon from '../../assets/icons/info-grey.svg?react';

////////////////////////////////

const address = 'ADDRESS FROM SERVER';
//////////////////////////////////////

export const RefillModal = ({ setHasFooter }) => {
  const [hasForm, setHasForm] = useState(false);
  const [hasAddress, setHasAddress] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  setTimeout(() => {
    setIsLoading(true)
  }, 3000);

  const tooltipMessage = isCopied
  ? MESSAGES.COPIED
  : MESSAGES.TOOLTIP_COPY

  const setSuccessHandler = () => {

    //////send data to server, when loading setIsLoading(true), after:  setIsLoading(false) setHasSuccess(true); setHasAddress(false);

    setHasSuccess(true);
    setHasAddress(false);
  };

  const closeHandler = () => {
    setHasFooter(false);
    setHasForm(false);
    setHasSuccess(false);
  };

  return (
    <>
      <header>
        <div className={styles.refill__buttons}>
          <button
            className={cn(
              styles.refill__close,
              { [styles.hide]: !hasForm}
            )}
            type="button"
            onClick={() => setHasForm(false)}
            disabled={!hasForm}
          >
            <ArrowIcon />
          </button>

          <button
            className={cn(
              styles.refill__close,
              { [styles.hide]: hasSuccess}
            )}
            type="button"
            onClick={closeHandler}
          >
            <CloseIcon />
          </button>
        </div>

        <h3 className={styles.refill__title}>
          {getRefillModalTitle(hasForm, hasSuccess, hasAddress)}
        </h3>
      </header>

      {!hasForm && !hasSuccess && !hasAddress && (
        <button
          className={styles.refill__cript}
          type="button"
          onClick={() => setHasForm(true)}
        >
          <span className={styles.refill__text}>Криптовалюта</span>

          <WhiteArrowIcon />
        </button>
      )}

      {hasForm && (
        <RefillForm
          setHasAddress={setHasAddress}
          setHasForm={setHasForm}
        />
      )}

      {hasAddress && (
        <div>
          <p className={`${styles.refill__subheader} ${styles['refill__address-subheader']}`}>
            Адрес кошелька для пополнения
          </p>

          <div className={styles.refill__address}>
            <Tooltip title={tooltipMessage} placement="top">
              <p>
                <span>{address}</span>

                <button onClick={() => createCopy(address, setIsCopied)} />
              </p>
            </Tooltip>
          </div>

          <button
            className={`${styles.refill__cript} ${styles.refill__final}`}
            type="button"
            onClick={setSuccessHandler}
          >
            {isLoading
              ? (<LoadingIcon className={styles.refill__loader} />)
              : 'Я оплатил (а)'
            }
          </button>

          <div className={`${styles.refill__subheader} ${styles.refill__info}`}>
            <div>
              <InfoIcon />
            </div>

            <p>Внимание: проверьте адрес кошелька и сеть перед отправкой средств.
              После отправки полной суммы на указанный адрес нажмите кнопку «я оплатил(а)»
            </p>
          </div>
        </div>
      )}

      {hasSuccess && (
        <>
          <h5 className={styles.refill__subheader}>
            {/* Сумма поступит на Ваш кошелек

            <br />

            в течении 2 — 30 минут. */}
            Баланс пополнится в течении 5 минут.
          </h5>

          <button
            className={`${styles.refill__cript} ${styles.refill__final}`}
            type="button"
            onClick={closeHandler}
          >
            Закрыть
          </button>
        </>
      )}
    </>
  );
};
