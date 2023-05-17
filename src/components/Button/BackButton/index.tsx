import cl from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowIc } from '@/assets/images/button/arrow.svg';

import styles from './styles.module.scss';

type Props = {
  className?: string;
};

export const BackButton: FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <button className={cl(styles.button, className)} onClick={handleGoBack}>
      <ArrowIc />
      <span className={styles.buttonText}>BACK</span>
    </button>
  );
};
