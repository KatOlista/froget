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

      <div className={styles.game__visualization}>

      </div>

      <UserSlider />
    </section>
  );
};
