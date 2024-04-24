import { useState } from 'react';

import { ReferalModal, WithdrawalModal, RefillModal, Overlay } from '..';
import { MODAL_TYPES } from '../../utils/constants';

export const UserFooter = ({ setHasFooter, modalType }) => {
  const [isClose, setIsClose] = useState(false);

  const setClose = () => {
    setIsClose(true);

    setTimeout(() => {
      setHasFooter(false);
    }, 400);
  };

  const actualContent = () => {
    let content = '';

    switch(modalType) {
      case MODAL_TYPES.REFILL: content = (<RefillModal setHasFooter={setClose} />);
        break;
      case MODAL_TYPES.WITHDRAWAL: content = (<WithdrawalModal setHasFooter={setClose} />);
        break;
      case MODAL_TYPES.REFERAL: content = (<ReferalModal setHasFooter={setClose} />);
        break;
      default: return (<></>)
    }

    return content;
  };

  return (
    <footer>
      <Overlay isClose={isClose}>
        {actualContent()}
      </Overlay>
    </footer>
  );
};
