import { Modal } from '..';
import { userDeviceWidth } from '../../utils/constants';

import styles from './WithdrawalModal.module.scss';

import CloseIcon from '../../assets/icons/close.svg?react';
import ArrowIcon from '../../assets/icons/arrow-left.svg?react';
import WhiteArrowIcon from '../../assets/icons/arrow-right.svg?react';

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.50)',
    zIndex: 10,
  },
  content: {
    margin: '0 auto',
    padding: '0',
    minWidth: '320px',
    width: `${userDeviceWidth}px`,
    maxWidth: '640px',
    top: 'auto',
    left: '50%',
    right: 'auto',
    bottom: '-20px',
    transform: 'translate(-50%)',
    outline: 'none',
    border: 'none',
    borderRadius: '24px 24px 0 0',
  },
};

export const WithdrawalModal = ({ setIsOpen, isModalOpen }) => {
  return (
    <Modal
      customStyles={customStyles}
      isOpen={isModalOpen}
      toggleModal={() => {
        setIsOpen(false);
      }}
    >
      <div className={styles.modal}>
        <header className={styles.modal__header}>
          <button
            className={styles.modal__close}
            type="button"
            // onClick={() => {}}
          >
            <ArrowIcon />
          </button>

          <button
            className={styles.modal__close}
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </button>
        </header>

        <h3 className={styles.modal__title}>
          Выберите платежный метод
        </h3>

        <button
          className={styles.modal__cript}
          type="button"
          onClick={() => {}}
        >
          <span className={styles.modal__text}>Криптовалюта</span>

          <WhiteArrowIcon />
        </button>
      </div>
    </Modal>
  );
};
