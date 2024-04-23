// import { useState } from 'react';
// import Tooltip from '@mui/material/Tooltip';

// import { ModalForm } from '../';
// import { HeaderSection, ModalMainButton, SuccessSection } from '../';
// import { createCopy } from '../../utils';
// import { MESSAGES } from '../../utils/constants';

// import styles from './WithdrawalModal.module.scss';


// import LoadingIcon from '../../assets/icons/loader-icon-white.svg?react';
// import InfoIcon from '../../assets/icons/info-grey.svg?react';


// ////////////////////////////////

// const address = 'ADDRESS FROM SERVER';
// //////////////////////////////////////

// export const WithdrawalModal = ({ setHasFooter }) => {
//   const [hasForm, setHasForm] = useState(false);
//   const [hasAddress, setHasAddress] = useState(false);
//   const [hasSuccess, setHasSuccess] = useState(false);
//   const [isCopied, setIsCopied] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   setTimeout(() => {
//     setIsLoading(true)
//   }, 3000);

//   const tooltipMessage = isCopied
//   ? MESSAGES.COPIED
//   : MESSAGES.TOOLTIP_COPY

//   const setSuccessHandler = () => {

//     //////send data to server, when loading setIsLoading(true), after: setIsLoading(false) setHasSuccess(true); setHasAddress(false);

//     setHasSuccess(true);
//     setHasAddress(false);
//   };

//   const closeHandler = () => {
//     setHasFooter(false);
//     setHasForm(false);
//     setHasSuccess(false);
//   };

//   return (
//     <>
//       <HeaderSection
//           hasForm={hasForm}
//           setHasForm={setHasForm}
//           hasSuccess={hasSuccess}
//           closeHandler={closeHandler}
//           hasAddress={hasAddress}
//       />

//       {!hasForm && !hasSuccess && !hasAddress && (
//         <ModalMainButton onClick={setHasForm} />
//       )}

//       {hasForm && (
//         <ModalForm
//           setHasAddress={setHasAddress}
//           setHasForm={setHasForm}
//         />
//       )}

//       {hasAddress && (
//         <div>
//           <p className={`${styles.refill__subheader} ${styles['refill__address-subheader']}`}>
//             Адрес кошелька для пополнения
//           </p>

//           <div className={styles.refill__address}>
//             <Tooltip title={tooltipMessage} placement="top">
//               <p>
//                 <span>{address}</span>

//                 <button onClick={() => createCopy(address, setIsCopied)} />
//               </p>
//             </Tooltip>
//           </div>

//           <ModalMainButton
//             onClick={setSuccessHandler}
//             isDisabled={isLoading}
//             content={
//               isLoading
//                 ? (<LoadingIcon className={styles.refill__loader} />)
//                 : 'Я оплатил (а)'
//             }
//           />

//           <div className={`${styles.refill__subheader} ${styles.refill__info}`}>
//             <div>
//               <InfoIcon />
//             </div>

//             <p>Внимание: проверьте адрес кошелька и сеть перед отправкой средств.
//               После отправки полной суммы на указанный адрес нажмите кнопку «я оплатил(а)»
//             </p>
//           </div>
//         </div>
//       )}

//       {hasSuccess && (
//         <SuccessSection closeHandler={closeHandler} />
//       )}
//     </>
//   );
// };

import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

import { HeaderSection, ModalMainButton, SuccessSection, ModalForm } from '../';
import { createCopy } from '../../utils';
import { MESSAGES } from '../../utils/constants';

import styles from './WithdrawalModal.module.scss';

import LoadingIcon from '../../assets/icons/loader-icon-white.svg?react';
import InfoIcon from '../../assets/icons/info-grey.svg?react';

////////////////////////////////

const address = 'ADDRESS FROM SERVER';
//////////////////////////////////////

export const WithdrawalModal = ({ setHasFooter }) => {
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

    //////send data to server, when loading setIsLoading(true), after: setIsLoading(false) setHasSuccess(true); setHasAddress(false);

    setHasSuccess(true);
    setHasAddress(false);
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
      />

      {!hasForm && !hasSuccess && !hasAddress && (
        <ModalMainButton onClick={setHasForm} />
      )}

      {hasForm && (
        <ModalForm
          setHasAddress={setHasAddress}
          setHasForm={setHasForm}
          subtitle='Mинимальная сумма депозита 5$'
          amount='Сумма пополнения в $'
          buttonTitle='Пополнить'
          sendDataToServer={sendDataToServer}
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
        </div>
      )}

      {hasSuccess && (
        <SuccessSection closeHandler={closeHandler} />
      )}
    </>
  );
};

