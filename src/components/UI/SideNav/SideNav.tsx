import styles from './SideNav.module.css';
import { navs } from '../../utils/constants';
import LoginButton from '../LoginButton/LoginButton';

const SideNav = ({ show, setShowHandler }: { show: boolean; setShowHandler: any }) => {
  return (
    <>
      <nav className={`${styles['mobile-nav']} ${show ? styles.show : ''}`} role='navigation'>
        <div className={styles['logo']} role='banner'>
          <img src='/smart lights_logo.svg' alt='Smart lights' />
        </div>
        <hr aria-hidden='true' />
        <ul className={styles['mobile-nav__items']} role='menu'>
          {navs.map((nav) => (
            <li className={styles['mobile-nav__item']} key={nav} role='menuitem'>
              <a href={`#${nav.toLocaleLowerCase()}`}>{nav}</a>
            </li>
          ))}
        </ul>
        <LoginButton sideNav={true} />
      </nav>

      <div
        onClick={() => setShowHandler(!show)}
        className={`${styles.backdrop} ${show ? styles['show-backdrop'] : ''}`}
      ></div>
    </>
  );
};

export default SideNav;
