import { UserSlider } from '../';
import styles from './GameItem.module.scss';

export const GameItem = () => {
  const ratio = 1.02;

  return (
    <section className={styles.game}>
      <div className={styles.game__info}>
        <p className={styles.game__ratio}>
          {ratio}
          <span>x</span>
        </p>

        <span className={styles.game__addition}>Коэффицент</span>
      </div>

      {/* <div className={styles.game__visualization}> */}
        <div className={styles.game__clouds}>
          <div className={styles.game__cloud1}></div>

          <div className={styles.game__cloud2}></div>

          <div className={styles.game__cloud3}></div>

          <div className={styles.game__cloud4}></div>

          <div className={styles.game__cloud5}></div>

          <div className={styles.game__cloud6}></div>

          <div className={styles.game__cloud7}></div>

          <div className={styles.game__cloud8}></div>
        </div>
      {/* </div> */}

      <UserSlider />
    </section>
  );
};
