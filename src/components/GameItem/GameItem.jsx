import { useSelector } from 'react-redux';
import { useState } from 'react';

import {
  Circle,
  UserSlider,
  WinLoseBoard,
} from '../';

import styles from './GameItem.module.scss';

export const GameItem = () => {
  const ratio = 1.02;
  const [isCircleVisible, setIsCircleVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  // const { startGame } = useSelector(state => state.startGame);
  const { endGame } = useSelector(state => state.endGame);

  return (
    <section className={styles.game}>
      <div className={styles.game__info}>
        <p className={styles.game__ratio}>
          {ratio}
          <span>x</span>
        </p>
      </div>


      <div className={styles['game__modale-container']}>
        {isCircleVisible && (<Circle />)}

        {endGame && (<WinLoseBoard isSuccess={isSuccess} rate={ratio} />)}
      </div>


      {/* <div className={cn(
          styles.game__clouds,
          { [styles.game__start]: startGame }
        )}
      >
        <div className={styles.game__cloud1} />

        <div className={styles.game__cloud2} />

        <div className={styles.game__cloud3} />

      </div> */}

      {/* <div className={cn(
        styles.game__clouds,
        { [styles.game__start2]: startGame }
      )}
      >
        <div className={styles.game__cloud4} />

        <div className={styles.game__cloud5} />

        <div className={styles.game__cloud6} />

        <div className={styles.game__cloud7} />

        <div className={styles.game__cloud8} />
      </div> */}

      <UserSlider />
    </section>
  );
};
