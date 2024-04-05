import styles from './UserSliderItem.module.scss';

export const UserSliderItem = ({ user }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slide__avatar}>
        {user.avatar ?
          (<img src={user.avatar} alt="avatar" className={styles.slide__foto} />)
          : (<div className={styles.slide__foto} />)
        }

        <div className={styles.slide__info}>
          <p className={styles.slide__name}>{user.userName}</p>

          <p className={styles.slide__bet}>
            {user.bet}
          </p>
        </div>
      </div>

    </div>
  );
};
