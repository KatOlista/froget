import { useState } from 'react';
import cn from 'classnames';

import { RoundButton, SecondaryButton } from '../';
import { DOUBLE, HALF, MAX, ONE_AND_A_HALF, RATE } from '../../utils/constants';
import './Footer.css';

import MinusIcon from '../../assets/icons/minus-icon.svg?react';
import PlusIcon from '../../assets/icons/plus-icon.svg?react';

export const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const increaseHandler = () => {};
  const decreaseHandler = () => {};
  const doubleHandler = () => {};
  const oneAndAHalfHandler = () => {};
  const halfHandler = () => {};
  const maxHandler = () => {};

  return (
    <footer className='footer'>
      <div className='rate'>
        <div className='rate-management'>
          <div className='add-substract'>
            <RoundButton icon={(<MinusIcon />)} onClick={increaseHandler} />

            <span>{RATE}</span>

            <RoundButton icon={(<PlusIcon />)} onClick={decreaseHandler} />
          </div>

          <div className='multiple-divide-section'>
            <div className='math-buttons-container'>
              <SecondaryButton content={DOUBLE} onClick={doubleHandler} />

              <SecondaryButton content={ONE_AND_A_HALF} onClick={oneAndAHalfHandler} />

              <SecondaryButton content={HALF} onClick={halfHandler} />
            </div>

            <SecondaryButton content={MAX} onClick={maxHandler} />
          </div>
        </div>

        <div className='rate-amount'>
          СТАВКА
        </div>
      </div>

      <div className='withdrawal'>
        <button className='withdrawal-btn'>
          <span className='accent-color'>X</span>
          <span>2.5</span>
        </button>

        <div className='withdrawal-input'>
          <label
            className={cn(
              'withdrawal-label',
              { checked: isChecked },
            )}
          >
            <input
              id='withdrawal'
              type="checkbox"
              onClick={() => setIsChecked(!isChecked)}
            />
          </label>

          <span>Авто-вывод</span>
        </div>
      </div>
    </footer>
  )
};
