import styles from './styles.module.scss';

export const TableHeading = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.headingField}>che</div>
      <div className={styles.headingField}>title</div>
      <div className={styles.headingField}>Content</div>
      <div className={styles.headingField}>View</div>
      <div className={styles.headingField}>Last used</div>
    </div>
  );
};
