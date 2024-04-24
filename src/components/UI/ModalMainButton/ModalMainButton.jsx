import styles from './ModalMainButton.module.scss';

import WhiteArrowIcon from '../../../assets/icons/arrow-right.svg?react';

export const ModalMainButton = ({ onClick, content, isDisabled, setHasNext }) => {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => onClick(setHasNext)}
      disabled={isDisabled}
    >
      {content
        ? (
          <div className={`${styles.button__cript} ${styles.button__content}`}>
            {content}
          </div>
          ) : (
          <div className={styles.button__cript}>
            <span className={styles.button__text}>Криптовалюта</span>

            <WhiteArrowIcon />
          </div>
        )}
    </button>
  );
};
