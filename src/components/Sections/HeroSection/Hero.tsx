import LoginButton from '../../UI/LoginButton/LoginButton';
import styles from './Hero.module.css';
import 'aos/dist/aos.css';

const Hero = () => {
  return (
    <section className={styles['hero-section']} id='home' aria-labelledby='Home'>
      <div className={styles['hero-section__text']} role='region' aria-label='Hero Section Text'>
        <p
          className={styles['hero-section__text--pre-title']}
          data-aos='fade-up'
          data-aos-delay={0}
        >
          Smart Lighting Solutions
        </p>
        <h1 className={styles['hero-section__text--title']} data-aos='fade-up' data-aos-delay={100}>
          Bringing A New Perspective To Street Lights And The Cities Of Tomorrow
        </h1>
        <LoginButton />
      </div>
    </section>
  );
};

export default Hero;
