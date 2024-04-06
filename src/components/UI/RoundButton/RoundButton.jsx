import cn from 'classnames';

import styles from './RoundButton.module.scss';

export const RoundButton = ({ icon, onClick, isDisabled, isPlus }) => {
  return (
    <button
      className={cn(
        styles.round,
        { [styles.round__plus]: isPlus },
        { [styles.round__minus]: !isPlus },
        )}
      onClick={onClick}
      disabled={isDisabled}
      type='button'
    >
      {/* {icon} */}
    </button>
  );
};
