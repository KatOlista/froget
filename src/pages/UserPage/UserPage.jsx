import { useState } from 'react';
import { useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';

import { BALANCE_BUTTONS, MESSAGES, MIN_WITHDRAWAL_AMOUNT, USER_OPTIONS } from '../../utils/constants';
import { Avatar, BalanceButton, BalanceActionButton, FailWithdrawalModal, WithdrawalModal } from '../../components';

import styles from './UserPage.module.scss';
import { Option } from '../../components/UI/Option/Option';

// import LoadIcon from '../../assets/icons/loader.svg?react';

export const UserPage = () => {
  const { user } = useSelector(state => state.user);

  const [selectedOption, setSelectedOption] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [selectedButton, setSelectedButton] = useState(BALANCE_BUTTONS[0]);
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
  const [isFailWithdrawalModalOpen, setIsFailWithdrawalModalOpen] = useState(false);

  const selectBalanceHandler = (button) => {
    setSelectedButton(button);
  };

  const tooltipMessage = isCopied
    ? MESSAGES.COPIED
    : MESSAGES.TOOLTIP_COPY

  const createCopyHandler = () => {
    navigator.clipboard.writeText(user.id);

    setIsCopied(() => true);

    setTimeout(() => {
      setIsCopied(() => false);
    }, 3000);
  };

  const depositHandler = () => {};

  const withdrawalHandler = (event) => {
    event.stopPropagation();

    if (user[selectedButton.balance] < MIN_WITHDRAWAL_AMOUNT) {
      setIsFailWithdrawalModalOpen(true);

      return;
    }

    setIsWithdrawalModalOpen(true);
  };

  const isModalOpen = isWithdrawalModalOpen || isFailWithdrawalModalOpen;

  return (
    <section className={`${styles.profile} ${isModalOpen ? styles.blur : ''}`}>
      <div className={styles.profile__id}>
        <Tooltip title={tooltipMessage} placement="top">
          <p>
            <span>ID {user.id}</span>

            <button onClick={() => createCopyHandler()} />
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
            onClick={() => depositHandler()}
          />

          <BalanceActionButton
            text='Вывод'
            isArrow
            onClick={withdrawalHandler}
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
          />
        ))}
      </ul>

      <FailWithdrawalModal
        setIsOpen={setIsFailWithdrawalModalOpen}
        isModalOpen={isFailWithdrawalModalOpen}
      />

      <WithdrawalModal
        setIsOpen={setIsWithdrawalModalOpen}
        isModalOpen={isWithdrawalModalOpen}
      />

    </section>
  )
};
