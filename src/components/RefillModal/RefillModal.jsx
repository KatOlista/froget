import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

import { HeaderSection, ModalMainButton, SuccessSection, ModalForm, Overlay } from '../';
import { createCopy, getRefillModalTitle } from '../../utils';
import { MESSAGES, MIN_REFILL_AMOUNT } from '../../utils/constants';

import styles from './RefillModal.module.scss';

import LoadingIcon from '../../assets/icons/loader-icon-white.svg?react';
import InfoIcon from '../../assets/icons/info-grey.svg?react';

////////////////////////////////

const address = 'ADDRESS FROM SERVER';
//////////////////////////////////////

export const RefillModal = ({ setHasFooter }) => {
  const [hasForm, setHasForm] = useState(false);
  const [isFormClose, setIsFormClose] = useState(false);

  const [hasAddress, setHasAddress] = useState(false);
  const [isAddressClose, setIsAddressClose] = useState(false);

  const [hasSuccess, setHasSuccess] = useState(false);
  const [isSuccessClose, setIsSuccessClose] = useState(false);

  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  const setOnClose = (setIsClose, setHasElement) => {
    setIsClose(true);

    setTimeout(() => {
      setHasElement(false);
    }, 400);
  };

  const setOnOpen = (setHasElement) => {
    setIsFormClose(false);
    setIsAddressClose(false);
    setIsSuccessClose(false);

    setHasElement(true);
  };

  const tooltipMessage = isCopied
  ? MESSAGES.COPIED
  : MESSAGES.TOOLTIP_COPY

  const setSuccessHandler = () => {

    //////send data to server, when loading setIsLoading(true), after: setIsLoading(false) setHasSuccess(true); setHasAddress(false);

    setOnOpen(setHasSuccess);
  };

  const sendDataToServer = () => {

    //////code for sending data from ModalForm component
  };

  return (
    <>
      <>
        <HeaderSection
          closeHandler={setHasFooter}
          getModalTitle={getRefillModalTitle}
        />

        <ModalMainButton
          onClick={setOnOpen}
          setHasNext={setHasForm}
        />
      </>

      {hasForm && (
        <Overlay isClose={isFormClose}>
          <HeaderSection
            setOnClose={setOnClose}
            hasForm={hasForm}
            setIsThisModalClose={setIsFormClose}
            setHasThisModal={setHasForm}
            closeHandler={setHasFooter}
            getModalTitle={getRefillModalTitle}
          />

          <ModalForm
            setOnOpen={setOnOpen}
            setHasAddress={setHasAddress}
            setHasForm={setHasForm}
            subtitle='Mинимальная сумма депозита 5$'
            amount='Сумма пополнения в $'
            buttonTitle='Пополнить'
            sendDataToServer={sendDataToServer}
            minAmount={MIN_REFILL_AMOUNT}
            amountError={MESSAGES.EMPTY_REFIL_AMOUNT_INPUT}
          />
        </Overlay>
      )}

      {hasAddress && (
        <Overlay isClose={isAddressClose}>
          <HeaderSection
            setOnClose={setOnClose}
            setIsThisModalClose={setIsAddressClose}
            setHasThisModal={setHasAddress}
            closeHandler={setHasFooter}
            hasAddress={hasAddress}
            getModalTitle={getRefillModalTitle}
          />

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

          <ModalMainButton
            onClick={setSuccessHandler}
            isDisabled={isLoading}
            content={
              isLoading
                ? (<LoadingIcon className={styles.refill__loader} />)
                : 'Я оплатил (а)'
            }
          />

          <div className={`${styles.refill__subheader} ${styles.refill__info}`}>
            <div>
              <InfoIcon />
            </div>

            <p>Внимание: проверьте адрес кошелька и сеть перед отправкой средств.
              После отправки полной суммы на указанный адрес нажмите кнопку «я оплатил(а)»
            </p>
          </div>
        </Overlay>
      )}

      {hasSuccess && (
        <Overlay isClose={isSuccessClose}>
          <HeaderSection
            setOnClose={setOnClose}
            setIsThisModalClose={setIsSuccessClose}
            setHasForm={setHasForm}
            hasSuccess={hasSuccess}
            closeHandler={setHasFooter}
            getModalTitle={getRefillModalTitle}
          />

          <SuccessSection
            closeHandler={setHasFooter}
            content='Баланс пополнится в течении 5 минут.'
          />
        </Overlay>
      )}
    </>
  );
};
