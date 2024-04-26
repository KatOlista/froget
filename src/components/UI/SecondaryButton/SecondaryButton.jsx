// import { Button } from '../Button/Button';

import styles from './SecondaryButton.module.scss';

// export const SecondaryButton = ({ content, onClick, isDisabled }) => {
  export const SecondaryButton = ({ content }) => {
  return (
    // <Button
    //   onClick={onClick}
    //   disabled={isDisabled}
    //   style={styles.wrapper}
    // >
      <button
        className={styles['secondary-button']}
        // onClick={onClick}
        // disabled={isDisabled}
        // type='button'
      >
        {content}
      </button>
    // </Button>
  );
};
