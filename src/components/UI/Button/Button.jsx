import styles from './Button.module.scss';

export const Button = ({
  children,
  style,
  onClick,
  disabled = false,
}) => (
  <button
    type='button'
    className={`${styles.button} ${style}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
