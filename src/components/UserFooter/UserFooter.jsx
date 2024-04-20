import { useState } from 'react';
import cn from 'classnames';

import { RefillForm } from '../RefillForm/RefillForm';

import styles from './UserFooter.module.scss';

import CloseIcon from '../../assets/icons/close.svg?react';
import ArrowIcon from '../../assets/icons/arrow-left.svg?react';
import WhiteArrowIcon from '../../assets/icons/arrow-right.svg?react';

export const UserFooter = ({ setHasFooter }) => {
  const [hasForm, setHasForm] = useState(false);

  const title = hasForm
    ? 'Пополнение баланса'
    : 'Выберите платежный метод';

  return (
    <footer className={styles.overlay}>
      <div className={styles.footer}>
        <header className={styles.footer__header}>
          <div className={styles.footer__buttons}>
            <button
              className={cn(
                styles.footer__close,
                { [styles.hide]: !hasForm}
              )}
              type="button"
              onClick={() => setHasForm(false)}
              disabled={!hasForm}
            >
              <ArrowIcon />
            </button>

            <button
              className={styles.footer__close}
              type="button"
              onClick={() => setHasFooter(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <h3 className={styles.footer__title}>{title}</h3>
        </header>

        {hasForm
          ? (<RefillForm />)
          : (<button
              className={styles.footer__cript}
              type="button"
              onClick={() => setHasForm(true)}
            >
              <span className={styles.footer__text}>Криптовалюта</span>

              <WhiteArrowIcon />
            </button>)
        }
      </div>
    </footer>
  );
};
