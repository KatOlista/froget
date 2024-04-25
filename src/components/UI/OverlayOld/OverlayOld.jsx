import cn from 'classnames';
import 'animate.css';

import styles from './OverlayOld.module.scss';

export const OverlayOld = ({ children, isClose }) => {
  return (
    <div
      className={cn(
        styles.overlay,
        'animate__animated',
        'animate__fadeIn',
        'animate__faster',
        { 'animate__fadeOut': isClose }
      )}
    >
      <div className={cn(
        styles.wrapper,
        'animate__animated',
        'animate__slideInUp',
        'animate__faster',
        { 'animate__slideOutDown': isClose }
      )}>
        {children}
      </div>
    </div>
  );
};
