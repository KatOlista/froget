import { useState } from 'react';
import { useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';

import { BALANCE_BUTTONS, MESSAGES, MIN_WITHDRAWAL_AMOUNT, MODAL_TYPES, USER_OPTIONS } from '../../utils/constants';
import { Avatar, BalanceButton, BalanceActionButton, FailWithdrawalModal } from '../../components';

import styles from './UserPage.module.scss';
import { Option } from '../../components/UI/Option/Option';
import { UserFooter } from '../../components/UserFooter/UserFooter';
import { createCopy } from '../../utils/services/createCopy';

export const UserPage = () => {
  const { user } = useSelector(state => state.user);

  const [selectedOption, setSelectedOption] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [selectedButton, setSelectedButton] = useState(BALANCE_BUTTONS[0]);
  const [isFailWithdrawalModalOpen, setIsFailWithdrawalModalOpen] = useState(false);

  const [hasFooter, setHasFooter] = useState(false);
  const [modalType, setModalType] = useState('');

  const selectBalanceHandler = (button) => {
    setSelectedButton(button);
  };

  const tooltipMessage = isCopied
    ? MESSAGES.COPIED
    : MESSAGES.TOOLTIP_COPY

  const buttonManipulate = (event, modalType) => {
    event.stopPropagation();

    if (selectedButton.balance === 'bonusBalance') {
      return;
    }

    if (user[selectedButton.balance] < MIN_WITHDRAWAL_AMOUNT) {
      setIsFailWithdrawalModalOpen(true);

      return;
    }

    setHasFooter(true);
    setModalType(modalType);
  };

  return (
    <>
      <section className={styles.profile}>
        <div className={styles.profile__id}>
          <Tooltip title={tooltipMessage} placement="top">
            <p>
              <span>ID {user.id}</span>

              <button onClick={() => createCopy(user.id, setIsCopied)} />
            </p>
          </Tooltip>
        </div>

        <Avatar user={user} />

        <div className={styles['profile__choose-balance']}>
          {BALANCE_BUTTONS.map(button => (
            <BalanceButton
              key={button.id}
              button={button}
              selectedButton={selectedButton}
              onClick={() => selectBalanceHandler(button)}
            />
          ))}
        </div>

        <div className={styles['profile__balance-actions']}>
          <h3 className={styles.profile__balance}>
            <span>Баланс</span>

            <p>
              <span>$</span>

              <span>{user[selectedButton.balance]}</span>
            </p>
          </h3>

          <div className={styles['profile__balance-buttons']}>
            <BalanceActionButton
              text='Депозит'
              onClick={(event) => buttonManipulate(event, MODAL_TYPES.REFILL)}
            />

            <BalanceActionButton
              text='Вывод'
              isArrow
              onClick={(event) => buttonManipulate(event, MODAL_TYPES.WITHDRAWAL)}
            />
          </div>
        </div>

        <ul className={styles.profile__options}>
          {USER_OPTIONS.map(option => (
            <Option
              option={option}
              key={option.title}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              setModalType={setModalType}
              setHasFooter={setHasFooter}
            />
          ))}
        </ul>

        <FailWithdrawalModal
          setIsOpen={setIsFailWithdrawalModalOpen}
          isModalOpen={isFailWithdrawalModalOpen}
        />

      </section>

      {hasFooter && (
        <UserFooter
          setHasFooter={setHasFooter}
          modalType={modalType}
        />
      )}
    </>
  )
};
