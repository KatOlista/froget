import { useState } from 'react';

import { useInterval } from '../../../hooks';

import styles from './Circle.module.scss';

export const Circle = () => {
  let [count, setCount] = useState(0);

  const time = 4;
  const maxCount = 100;

  const delay = 1000 * time / maxCount;

  useInterval(() => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  }, delay);

  return (
    <div>
      <div className={styles.circle}>
        {/* <div id='number' className={styles.number}>%</div> */}
        <div className={styles.number}>{count}%</div>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.innerBox}>
            <div className={styles.ellipse}></div>

            <div className={styles.ellipse2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
