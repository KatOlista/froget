import cn from 'classnames';

import styles from './BalanceActionButton.module.scss';

export const BalanceActionButton = ({ text, isArrow, onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        styles['balance-action-button'],
        { [styles.arrow]: isArrow },
        { [styles.plus]: !isArrow }
      )}
    >
      {text}

      <span />
    </button>
  );
};
