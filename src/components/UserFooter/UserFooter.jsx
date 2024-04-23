import { MODAL_TYPES } from '../../utils/constants';
import { RefillModal } from '../RefillModal/RefillModal';
import styles from './UserFooter.module.scss';

// import CloseIcon from '../../assets/icons/close.svg?react';
// import ArrowIcon from '../../assets/icons/arrow-left.svg?react';
// import WhiteArrowIcon from '../../assets/icons/arrow-right.svg?react';

export const UserFooter = ({ setHasFooter, modalType }) => {
  const actualContent = () => {
    let content = '';

    switch(modalType) {
      case MODAL_TYPES.REFILL: content = (<RefillModal setHasFooter={setHasFooter} />);
        break;
      default: return (<></>)
    }

    return content;
  };

  return (
    <footer className={styles.overlay}>
      <div className={styles.footer}>
        {actualContent()}
      </div>
    </footer>
  );
};
