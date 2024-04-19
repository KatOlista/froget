import { useRef } from 'react';
import ModalWindow from 'react-modal';

import { useClickOutside } from '../../hooks';

import './Modal.scss';

ModalWindow.setAppElement('#root');

// const customStyles = {
//   overlay: {
//     background: 'rgba(0, 0, 0, 0.50)',
//     zIndex: 10,
//   },
//   content: {
//     margin: '0 auto',
//     padding: '0',
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     transform: 'translate(-50%, -50%)',
//     outline: 'none',
//     border: 'none',
//     borderRadius: '0',
//   },
// };

export const Modal = ({
  children,
  isOpen = false,
  closeTimeoutMS = 200,
  ariaHideApp = false,
  customStyles = {},
  toggleModal,
  ...props
}) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    if (toggleModal) {
      toggleModal(isOpen);
    }
  });

  return (
    <ModalWindow
      isOpen={isOpen}
      style={customStyles}
      closeTimeoutMS={closeTimeoutMS}
      ariaHideApp={ariaHideApp}
      preventScroll
      {...props}
    >
      <div ref={modalRef}>
        {children}
      </div>
    </ModalWindow>
  );
};
