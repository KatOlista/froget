import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

import { MESSAGES, REFERAL_MODAL_TITLE } from '../../utils/constants';
import { HeaderSection } from '../UI/HeaderSection/HeaderSection';
import { ModalMainButton } from '../UI/ModalMainButton/ModalMainButton';
import { USER } from '../../utils/constants';
import { createCopy } from '../../utils';

import styles from './ReferalModal.module.scss';

import InfoIcon from '../../assets/icons/info-grey.svg?react';

export const ReferalModal = ({ setHasFooter }) => {
  const [isCopied, setIsCopied] = useState(false);

  const closeHandler = () => {
    setHasFooter(false);
  };

  const tooltipMessage = isCopied
  ? MESSAGES.COPIED
  : MESSAGES.TOOLTIP_COPY

  return (
    <div className={styles.referal}>
      <HeaderSection
        closeHandler={closeHandler}
        title={REFERAL_MODAL_TITLE.TITLE}
      />

      <div className={`${styles.referal__share}`}>
        Поделись FROGET с друзьями и получи $$$
      </div>

      <div>
        <p className={`${styles.referal__subheader} ${styles['referal__address-subheader']}`}>
          {/* Адрес кошелька для пополнения */}
        </p>

        <div className={styles.referal__address}>
          <Tooltip title={tooltipMessage} placement="top">
            <p>
              <span>{USER.invitationUrl}</span>

              <button onClick={() => createCopy(USER.invitationUrl, setIsCopied)} />
            </p>
          </Tooltip>
        </div>

        <ModalMainButton content='Ясно' onClick={() => setHasFooter(false)} />

        <div className={`${styles.referal__subheader} ${styles.referal__info}`}>
          <div>
            <InfoIcon />
          </div>

          <p> За каждого приведенного по Вашей реферальной ссылке друга, который пополнит баланс, Вы получите
            <span>2$</span>
            на основной баланс
          </p>
        </div>
      </div>
    </div>
  );
};
