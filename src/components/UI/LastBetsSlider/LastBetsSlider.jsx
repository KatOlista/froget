import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BETS } from '../../../utils/constants';
import { Bet } from './Bet';

import styles from './LastBetsSlider.module.scss';
import 'swiper/scss/navigation';
import 'swiper/scss';
import { getSlidesPerView } from '../../../utils/';

export const LastBetsSlider = ({
  // bets,
  // isLoading,
  // hasError,
  moverClass,
}) => {
  // const hasErrorMessage = hasError && !isLoading;
  // const hasNoItemsOnServer = !bets.length && !hasError && !isLoading;

  const slideWidth = 64;
  const spaceBetween = 6;

  return (
    <section className={styles.bets}>
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
        spaceBetween={spaceBetween}
        slidesPerView={getSlidesPerView(slideWidth, spaceBetween, BETS.length)}
      >
        {BETS.map(bet => {
          return (
            <SwiperSlide
              key={bet}
              className={styles.slide}
            >
              <Bet bet={bet} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  )
};
