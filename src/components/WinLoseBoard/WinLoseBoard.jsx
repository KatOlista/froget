import cn from 'classnames';

import styles from './WinLoseBoard.module.scss';
import { MESSAGES } from '../../utils/constants';

export const WinLoseBoard = ({ isSuccess, rate }) => {
  const text = isSuccess
    ? MESSAGES.WIN_TEXT
    : MESSAGES.LOSE_TEXT;

  return (
    <div className={cn(
      styles.modale,
      { [styles.modale__success]: isSuccess },
      { [styles.modale__lose]: !isSuccess }
    )}
    >
      <p className={styles.modale__info}>{text}</p>

      <p className={styles.modale__rate}>{rate}</p>
    </div>
  );
};
