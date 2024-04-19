import { Modal } from '..';
import { userDeviceWidth } from '../../utils/constants';

import styles from './WithdrawalModal.module.scss';

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
    bottom: '0',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    border: 'none',
    borderRadius: '24px 24px 0 0',
  },
};

export const WithdrawalModal = ({ setIsOpen, isModalOpen }) => {
  return (
    <Modal
      customClassName='fail-withdrawal'
      customStyles={customStyles}
      isOpen={isModalOpen}
      toggleModal={() => {
        setIsOpen(false);
      }}
    >
      <div className={styles.modal}>
        <h3 className={styles.modal__title}>
          Выберите платежный метод
        </h3>

        <button
          className={styles.modal__close}
          type="button"
          onClick={() => setIsOpen(false)}
        >
          Криптовалюта
        </button>
      </div>
    </Modal>
  );
};
