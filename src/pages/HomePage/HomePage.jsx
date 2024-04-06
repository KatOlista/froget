import { Footer, LastBetsSlider, GameItem } from '../../components';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <section className={styles.home}>
      <LastBetsSlider />

      <GameItem />

      <Footer />
    </section>
  );
};
