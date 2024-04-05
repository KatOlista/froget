import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { UserSliderItem } from './UserSliderItem/UserSliderItem';

import styles from './UserSlider.module.scss';
import 'swiper/scss/navigation';
import 'swiper/scss';

import { USERS } from '../../../utils/constants';

const users = USERS;

export const UserSlider = ({
  // users,
  // isLoading,
  // hasError,
  moverClass,
}) => {
  // const hasErrorMessage = hasError && !isLoading;
  // const hasNoItemsOnServer = !users.length && !hasError && !isLoading;

  return (
    <section className={styles.slider}>
      {/* {hasErrorMessage && (
        <p>{MESSAGES.NO_SERVER_RESPONSE}</p>
      )}

      {hasNoItemsOnServer && (
        <p>
          {MESSAGES.NO_BETS}
        </p>
      )} */}

      {/* {isLoading && (<Loader />)} */}

      <Swiper
        loop
        modules={[Navigation]}
        navigation={{
          nextEl: `.${moverClass}-next`,
          prevEl: `.${moverClass}-prev`,
        }}
        spaceBetween={7}
        slidesPerView={3.25}
      >
        {users.map(user => {
          return (
            <SwiperSlide key={user.id}>
              <UserSliderItem user={user} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
