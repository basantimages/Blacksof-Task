import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles['footer-section']} role='contentinfo'>
      <div
        className={styles['footer-section__nav']}
        role='navigation'
        aria-label='Footer Navigation'
      >
        <img src='/smart lights_logo.svg' alt='Logo' data-aos='fade-up' data-aos-delay={0} />
        <div>
          <a href='#products' data-aos='fade-up' data-aos-delay={0}>
            Products
          </a>
          <a href='#software-services' data-aos='fade-up' data-aos-delay={50}>
            Software Services
          </a>
          <a href='#follow-us' data-aos='fade-up' data-aos-delay={100}>
            Follow Us
          </a>
        </div>
      </div>
      <hr />
      <div
        className={styles['footer-section__policies']}
        role='navigation'
        aria-label='Footer Policies'
      >
        <a href='#privacy-policy' data-aos='fade-up' data-aos-delay={0}>
          Privacy Policy
        </a>
        <a href='#terms-and-conditions' data-aos='fade-up' data-aos-delay={100}>
          Terms and Conditions
        </a>
        <a href='#cookie-policy' data-aos='fade-up' data-aos-delay={200}>
          Cookie Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
