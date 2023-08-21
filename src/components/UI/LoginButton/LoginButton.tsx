import styles from './LoginButton.module.css';

const LoginButton = ({ isBoldText, sideNav }: { isBoldText?: boolean; sideNav?: boolean }) => {
  return (
    <button
      className={`${styles['login-btn']} ${isBoldText ? styles['bold-text'] : ''} ${
        sideNav ? styles.sideNav : ''
      }`}
      data-aos='fade-up'
      data-aos-delay={0}
      role='button'
      aria-label='Login'
    >
      Login
    </button>
  );
};

export default LoginButton;
