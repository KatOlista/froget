import styles from './Circle.module.scss';

export const Circle = () => {
  return (
    <div>
      <div className={styles.circle}>
        <div className={styles.number}>%</div>
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
