import cn from 'classnames';

import styles from './BalanceActionButton.module.scss';

export const BalanceActionButton = ({ text, isArrow, onClick }) => {

  return (
    <button
      type='button'
      onClick={onClick}
      className={styles['balance-action-button']}
    >
      {text}

      <span className={cn(
        { [styles.arrow]: isArrow },
        { [styles.plus]: !isArrow }
      )} />
    </button>
  );
};
