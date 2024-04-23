import cn from 'classnames';
import 'animate.css';

import { MODAL_TYPES } from '../../utils/constants';
import { RefillModal } from '../RefillModal/RefillModal';
import styles from './UserFooter.module.scss';
import { useState } from 'react';

// import CloseIcon from '../../assets/icons/close.svg?react';
// import ArrowIcon from '../../assets/icons/arrow-left.svg?react';
// import WhiteArrowIcon from '../../assets/icons/arrow-right.svg?react';

export const UserFooter = ({ setHasFooter, modalType }) => {
  const [isClose, setIsClose] = useState(false);

  const setClose = () => {
    setIsClose(true);

    setTimeout(() => {
      setHasFooter(false);
    }, 400);
  }

  const actualContent = () => {
    let content = '';

    switch(modalType) {
      case MODAL_TYPES.REFILL: content = (<RefillModal setHasFooter={setClose} />);
        break;
      default: return (<></>)
    }

    return content;
  };

  return (
    <footer className={cn(
      styles.overlay,
      'animate__animated',
      'animate__fadeInUp',
      { 'animate__fadeOutDown': isClose }
    )}
    >
      <div className={styles.footer}>
        {actualContent()}
      </div>
    </footer>
  );
};
