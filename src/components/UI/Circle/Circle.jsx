import styles from './Circle.module.scss';

export const Circle = () => {
  return (
    <div className={styles.circle}>
      <div className={styles.circle__circle}>
        <div className={styles.circle__number}>%</div>
      </div>

      <div className={styles.circle__filler}>
      </div>
    </div>
  );
};
