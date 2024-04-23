import { ModalMainButton } from '../ModalMainButton/ModalMainButton';
import styles from './SuccessSection.module.scss';

export const SuccessSection = ({ closeHandler }) => {
  return (
    <>
      <h5 className={styles.success__subheader}>
        Баланс пополнится в течении 5 минут.
      </h5>

      <ModalMainButton onClick={closeHandler} content='Закрыть' />
    </>
  );
};
