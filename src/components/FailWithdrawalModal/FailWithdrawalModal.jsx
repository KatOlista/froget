import { Modal } from '..';

import styles from './FailWithdrawalModal.module.scss';

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.50)',
    zIndex: 10,
  },
  content: {
    margin: '0 auto',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    border: 'none',
    borderRadius: '24px',
  },
};

export const FailWithdrawalModal = ({ setIsOpen, isModalOpen }) => {
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
        <div className={styles.modal__info}>
          <h3 className={styles.modal__title}>
            Вывод не доступен
          </h3>
          <p className={styles.modal__subtitle}>
            На вашем балансе недостаточно средств
          </p>
        </div>

        <button
          className={styles.modal__close}
          type="button"
          onClick={() => setIsOpen(false)}
        >
          Закрыть
        </button>
      </div>
    </Modal>
  );
};
