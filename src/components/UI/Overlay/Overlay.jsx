import cn from 'classnames';

import styles from './Overlay.module.scss';

export const Overlay = ({ children, isClose }) => {
  return (
    <div
      className={cn(
        styles.overlay,
        'animate__animated',
        'animate__fadeIn',
        { 'animate__fadeOut': isClose }
      )}
    >
      <div className={cn(
        styles.wrapper,
        'animate__animated',
        'animate__fadeInUp',
        { 'animate__fadeOutDown': isClose }
      )}>
        {children}
      </div>
    </div>
  );
};
