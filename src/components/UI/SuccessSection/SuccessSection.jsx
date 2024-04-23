import { ModalMainButton } from '../ModalMainButton/ModalMainButton';
import styles from './SuccessSection.module.scss';

export const SuccessSection = ({ closeHandler, content }) => {
  return (
    <>
      <h5 className={styles.success__subheader}>
        {content}
      </h5>

      <ModalMainButton onClick={closeHandler} content='Закрыть' />
    </>
  );
};
