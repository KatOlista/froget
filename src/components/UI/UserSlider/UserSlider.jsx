import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

import { UserSliderItem } from './UserSliderItem/UserSliderItem';

import styles from './UserSlider.module.scss';
import 'swiper/scss/navigation';
import 'swiper/scss';

import { USERS } from '../../../utils/constants';
import { getSlidesPerView } from '../../../utils/';
import { useState } from 'react';

const users = USERS;

export const UserSlider = ({
  // users,
  // isLoading,
  // hasError,
  moverClass,
}) => {
  // const hasErrorMessage = hasError && !isLoading;
  // const hasNoItemsOnServer = !users.length && !hasError && !isLoading;

  const [isSliderVisible, setIsSliderVisible] = useState(false);

  const slideWidth = 88;
  const spaceBetween = 7;

  const showSliderHandler = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  return (
    <section className={cn(
      styles.slider,
      { [styles.visible]: isSliderVisible }
    )} onClick={() => showSliderHandler()}>
      {/* {hasErrorMessage && (
        <p>{MESSAGES.NO_SERVER_RESPONSE}</p>
      )}

      {hasNoItemsOnServer && (
        <p>
          {MESSAGES.NO_BETS}
        </p>
      )} */}

      {/* {isLoading && (<Loader />)} */}

      <hr className={styles.slider__line} />

      <div className={`${styles.slider__slider}`}>
        <Swiper
          loop
          modules={[Navigation]}
          navigation={{
            nextEl: `.${moverClass}-next`,
            prevEl: `.${moverClass}-prev`,
          }}
          spaceBetween={spaceBetween}
          slidesPerView={getSlidesPerView(slideWidth, spaceBetween, users.length)}
        >
          {users.map(user => {
            return (
              <SwiperSlide key={user.id}>
                <UserSliderItem user={user} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
