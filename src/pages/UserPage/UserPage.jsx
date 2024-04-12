import { useSelector } from 'react-redux';
import cn from 'classnames';
import 'animate.css';

import styles from './UserPage.module.scss';
import { MESSAGES } from '../../utils/constants';
import { useState } from 'react';

export const UserPage = () => {
  const { user } = useSelector(state => state.user);

  const [isCopied, setIsCopied] = useState(false);

  const createCopyHandler = () => {
    navigator.clipboard.writeText(user.id);

    setIsCopied(() => true);

    setTimeout(() => {
      setIsCopied(() => false);
    }, 3000);
  };

  return (
    <section className={styles.profile}>

      {isCopied && (
        <p className={cn(
          'animate__animated',
          'animate__fadeInRight',
          { [styles.profile__message]: isCopied }
          )}>
          {MESSAGES.COPIED}
        </p>
      )}

      <div className={styles.profile__id}>
        <p>
          <span>ID {user.id}</span>

          <button onClick={() => createCopyHandler()} />
        </p>
      </div>
    </section>
  )
};
