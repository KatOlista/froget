import cn from 'classnames';

import styles from './HeaderSection.module.scss';

import CloseIcon from '../../../assets/icons/close.svg?react';
import ArrowIcon from '../../../assets/icons/arrow-left.svg?react';

export const HeaderSection = ({
  hasForm,
  setHasForm,
  hasSuccess,
  closeHandler,
  hasAddress,
  getModalTitle,
  title,
}) => {
  return (
    <header>
      <div className={styles.header__buttons}>
        <button
          className={cn(
            styles.header__close,
            { [styles.hide]: !hasForm}
          )}
          type="button"
          onClick={() => setHasForm(false)}
          disabled={!hasForm}
        >
          <ArrowIcon />
        </button>

        <button
          className={cn(
            styles.header__close,
            { [styles.hide]: hasSuccess}
          )}
          type="button"
          onClick={closeHandler}
        >
          <CloseIcon />
        </button>
      </div>

      <h3 className={styles.header__title}>
        {!title
          ? getModalTitle(hasForm, hasSuccess, hasAddress)
          : title
        }
      </h3>
  </header>
  );
};
