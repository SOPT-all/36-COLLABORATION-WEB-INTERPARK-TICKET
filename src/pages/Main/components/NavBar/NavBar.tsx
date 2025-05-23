import * as styles from './NavBar.css';
import { NAV_ITEMS } from '@/shared/constants/navItems';

const NavBar = () => {
  return (
    <nav className={styles.navWrapper}>
      {NAV_ITEMS.map(({ id, name, icon: Icon }) => (
        <div key={id} className={styles.navItem}>
          <img
            src={Icon}
            className={
              id === 'search'
                ? styles.iconVariants.search
                : styles.iconVariants.default
            }
          />
          <span
            className={
              name === '홈'
                ? styles.navTextVariants.bold
                : styles.navTextVariants.normal
            }
          >
            {name}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
