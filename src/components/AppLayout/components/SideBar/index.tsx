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
    href: '/snippets',
    icon: <SnippetsIc />,
    text: 'Snippets',
  },
];

export const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        {SECTIONS.map((section) => (
          <Section href={section.href} text={section.text} icon={section.icon} />
        ))}
      </nav>
    </div>
  );
};
