import styles from './Avatar.module.scss';

export const Avatar = ({ user }) => {
  return (
    <div className={styles.avatar}>
      {user.avatar ?
        (<img src={user.avatar} alt="avatar" className={styles.avatar__foto} />)
        : (<div className={styles.avatar__foto} />)
      }

      <div className={styles.avatar__info}>
        <h4 className={styles.avatar__name}>{user.userName}</h4>

        <p className={styles.avatar__date}>
          <span>Дата регистрации:</span>
          <span>{user.registration}</span>
        </p>
      </div>
    </div>
  );
};
