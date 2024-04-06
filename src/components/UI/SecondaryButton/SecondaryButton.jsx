import styles from './SecondaryButton.module.scss';

export const SecondaryButton = ({ content, onClick, isDisabled }) => {
  return (
    <button
      className={styles['secondary-button']}
      onClick={onClick}
      disabled={isDisabled}
      type='button'
    >
      {content}
    </button>
  );
};
