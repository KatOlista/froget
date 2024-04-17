import styles from './ImpossibleWithdrawalModal.module.scss';

export const ImpossibleWithdrawalModal = () => {
  return (
    <div className={styles.impossible}>
      <div className={styles.impossible__info}>
        <h3 className={styles.impossible__title}>Вывод не доступен</h3>

        <p className={styles.impossible__subtitle}>На вашем балансе недостаточно средств</p>
      </div>

      <button className={styles.impossible__close}>Закрыть</button>
    </div>
  );
};
