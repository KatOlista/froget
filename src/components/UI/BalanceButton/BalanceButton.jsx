import cn from 'classnames';

import styles from './BalanceButton.module.scss';

export const BalanceButton = ({ selectedButton, button, onClick }) => {
  const isSelected = button.id === selectedButton.id;

  return (
    <button
      type='button'
      className={cn(
        styles.balance,
        { [styles.balance__selected]: isSelected }
      )}
      onClick={onClick}
    >
      {button.title}
    </button>
  );
};
