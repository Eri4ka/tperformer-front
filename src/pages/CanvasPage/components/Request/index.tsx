import { FC } from 'react';

import { RequestEnter } from './components/RequestEnter';
import { RequestHelp } from './components/RequestHelp';
import styles from './styles.module.scss';

type Props = {
  isRequestEnterOpen: boolean;
  onOpenRequestEnter: () => void;
  isRequestHelpVisible: boolean;
};

export const Request: FC<Props> = ({ isRequestEnterOpen, onOpenRequestEnter, isRequestHelpVisible }) => {
  return (
    <div className={styles.request}>
      <RequestHelp isVisible={isRequestHelpVisible} />
      <RequestEnter isRequestEnterOpen={isRequestEnterOpen} onOpenRequestEnter={onOpenRequestEnter} />
    </div>
  );
};
