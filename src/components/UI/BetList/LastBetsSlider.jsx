import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BETS } from '../../../utils/constants';
import { Bet } from './Bet';

import styles from './LastBetsSlider.module.scss';
import 'swiper/scss/navigation';
import 'swiper/scss';

export const LastBetsSlider = ({
  // bets,
  // isLoading,
  // hasError,
  moverClass,
}) => {
  // const hasErrorMessage = hasError && !isLoading;
  // const hasNoItemsOnServer = !bets.length && !hasError && !isLoading;

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
        spaceBetween={6}
        slidesPerView={4.5}
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
