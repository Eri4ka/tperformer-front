import {FC, memo} from 'react';

import { CrumbItem } from './components/CrumbItem';
import styles from './styles.module.scss';
import { TCrumb } from './types';

type Props = {
  data: TCrumb[];
};

export const BreadCrumbs: FC<Props> = memo(({ data }) => {
    console.log('BreadCrumbs')
  return (
    <div className={styles.crumbs}>
      <ul className={styles.crumbsList}>
        {data?.map((crumb, index) => (
          <li key={crumb.id} className={styles.crumbsItem}>
            <CrumbItem path={crumb.path} text={crumb.name} last={data.length - 1 === index} />
          </li>
        ))}
      </ul>
    </div>
  );
});
