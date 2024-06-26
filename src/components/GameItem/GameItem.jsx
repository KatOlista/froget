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
  const [isGameInfoVisible, setIsGameInfoVisible] = useState(false);
  const [isCircleVisible, setIsCircleVisible] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFroget, setIsFroget] = useState(false);

  // const { startGame } = useSelector(state => state.startGame);

  const { endGame } = useSelector(state => state.endGame);

  // const duration = 4;
  // const maxNum = 100;
  // const step = 1000 * duration / maxNum;
  // let num = 0;
  // let actualDuration = 0;

  // const createAnimationOnLoading = () => {
  //   const timerId = setInterval(() => {
  //     if (num < maxNum || actualDuration >= duration) {
  //       num++;
  //       actualDuration += step;
  //       console.log(num);
  //     } else {
  //       clearInterval(timerId);
  //     }
  //   }, step);
  // };

  // if (isCircleVisible) {
  //   createAnimationOnLoading();
  // }

  return (
    <section className={styles.game}>
      {isGameInfoVisible && (
        <div className={styles.game__info}>
          <p className={styles.game__ratio}>
            {ratio}
            <span>x</span>
          </p>
        </div>
      )}

      {isFroget && (
        <div className={styles.game__froget}>
          <div className={styles.game__frog} />
        </div>
      )}

      {isCircleVisible && (
        <div className={styles['game__circle-container']}>
          <Circle />
        </div>
      )}

      {endGame && (
        <div className={styles['game__modale-container']}>
          <WinLoseBoard isSuccess={isSuccess} rate={ratio} />
        </div>
      )}


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
