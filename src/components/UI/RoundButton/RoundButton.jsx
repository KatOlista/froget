import styles from './RoundButton.module.scss';

export const RoundButton = ({ icon, onClick, isDisabled }) => {
  return (
    <button
      className={styles.round}
      onClick={onClick}
      disabled={isDisabled}
      type='button'
    >
      {icon}
    </button>
  );
};
