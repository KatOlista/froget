import { Button } from '../Button/Button';

import styles from './SecondaryButton.module.scss';

export const SecondaryButton = ({ content, onClick, isDisabled }) => {
  return (
    <Button
      onClick={onClick}
      disabled={isDisabled}
      style={styles.wrapper}
    >
      <div
        className={styles['secondary-button']}
        // onClick={onClick}
        // disabled={isDisabled}
        // type='button'
      >
        {content}
      </div>
    </Button>
  );
};
