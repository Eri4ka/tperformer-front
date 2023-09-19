import cl from 'classnames';
import { FC } from 'react';

import { ReactComponent as HomeIc } from '@/assets/images/sidebar/home.svg';
import { ReactComponent as SnippetsIc } from '@/assets/images/sidebar/snippets.svg';

import { Section } from './components/Section';
import styles from './styles.module.scss';
import { TSection } from './types';

const SECTIONS: TSection[] = [
  {
    href: '/',
    icon: <HomeIc />,
    text: 'Home',
  },
  {
    href: '/publicSnippets',
    icon: <SnippetsIc />,
    text: 'Snippets',
  },
];

type Props = {
  isOpen: boolean;
};

export const SideBar: FC<Props> = ({ isOpen }) => {
  return (
    <div className={cl(styles.sidebar, { [styles.sidebar_open]: isOpen })}>
      <nav className={styles.sidebarNav}>
        {SECTIONS.map((section) => (
          <Section key={section.text} href={section.href} text={section.text} icon={section.icon} />
        ))}
      </nav>
    </div>
  );
};
