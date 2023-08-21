import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { navs } from '../../utils/constants';

import SideNav from '../../UI/SideNav/SideNav';
import LoginButton from '../../UI/LoginButton/LoginButton';

const Header = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [setIsScrolled]);

  return (
    <>
      <header className={`${styles['main-header']} ${isScrolled ? styles.scrolled : ''}`}>
        <img
          loading='lazy'
          className={styles.logo}
          src='/smart lights_logo.svg'
          alt='Smart lights'
        />
        <button
          className={`${styles['toggle-hamburger']} ${isButtonClicked ? styles['ham-button'] : ''}`}
          onClick={() => {
            setIsButtonClicked(!isButtonClicked);
          }}
          aria-label='Toggle Navigation'
          aria-expanded={isButtonClicked}
        >
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </button>
        <div
          className={styles['main-header__contents']}
          role='navigation'
          aria-label='Main Navigation'
        >
          {navs.map((nav, i) => (
            <a
              href={`#${nav.toLocaleLowerCase()}`}
              key={nav}
              data-aos='fade-up'
              data-aos-delay={(i + 1) * 100}
              role='menuitem'
            >
              {nav}
            </a>
          ))}
        </div>

        <div className={styles['desktop-login-btn']}>
          <LoginButton isBoldText={true} />
        </div>
        <SideNav show={isButtonClicked} setShowHandler={setIsButtonClicked} />
      </header>
    </>
  );
};

export default Header;
