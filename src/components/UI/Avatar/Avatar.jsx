import { USER } from '../../../utils/constants';

import styles from './Avatar.module.scss';

export const Avatar = () => {
  return (
    <div className={styles.avatar}>
      {USER.avatar ?
        (<img src={USER.avatar} alt="avatar" className={styles.avatar__foto} />)
        : (<div className={styles.avatar__foto} />)
      }

      <div className={styles.avatar__info}>
        <h4 className={styles.avatar__name}>{USER.userName}</h4>

        <p className={styles.avatar__date}>
          <span>Дата регистрации:</span>
          <span>{USER.registration}</span>
        </p>
      </div>
    </div>
  );
};
