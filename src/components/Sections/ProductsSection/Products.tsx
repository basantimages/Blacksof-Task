import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import styles from './Products.module.css';

const Products = () => {
  return (
    <section
      className={styles['products-section']}
      id='products'
      aria-labelledby='software-products'
    >
      <SectionTitle text={'Products'} />
      <h2 data-aos='fade-up' data-aos-delay={0}>
        <span>Cutting-edge hardware,</span> offerings helping cities optimize resources and achieve
        smart development goals
      </h2>
      <div
        className={styles['product-buttons']}
        data-aos='fade-up'
        data-aos-delay={0}
        role='group'
        aria-label='Product Selection'
      >
        <button className={styles.active}>Centralized Control & Monitoring System</button>
        <button>NEMA-Mounted VOLC 1160</button>
        <button>Retrofit Street Light Controller VOLC 2160</button>
        <button>Retrofit Street Light Controller VOLC 2180</button>
        <button>Retrofit Street Light Controller VOLC 4180</button>
      </div>

      <div className={styles['products-section__catalog']}>
        <div
          className={styles['products-section__catalog--image']}
          role='img'
          aria-label='Product Image'
        >
          <img
            src='/image_placeholder.png'
            alt='Smart lights'
            data-aos='fade-up'
            data-aos-delay={0}
          />
          <svg
            className={styles['nav-left']}
            data-aos='fade-up'
            data-aos-delay={0}
            xmlns='http://www.w3.org/2000/svg'
            width='31'
            height='31'
            viewBox='0 0 31 31'
            fill='none'
            role='button'
            aria-label='Previous'
          >
            <path
              d='M19.1475 20.9158L13.7017 15.47L19.1475 10.0242L17.3538 8.23047L10.1143 15.47L17.3538 22.7095L19.1475 20.9158Z'
              fill='black'
            />
          </svg>
        </div>
        <div
          className={styles['products-section__catalog__details']}
          data-aos='fade-up'
          data-aos-delay={0}
          role='region'
          aria-label='Product Details'
        >
          <div>
            <p
              className={styles['products-section__catalog__details--number']}
              data-aos='fade-up'
              data-aos-delay={0}
            >
              Products <span>1</span>/5
            </p>
            <h3
              className={styles['products-section__catalog__details--title']}
              data-aos='fade-up'
              data-aos-delay={50}
            >
              Centralized Control & Monitoring System
            </h3>
            <p
              className={styles['products-section__catalog__details--desc']}
              data-aos='fade-up'
              data-aos-delay={100}
            >
              Designed indigenously for street lighting projects, the CCMS offers a complete feeder
              panel for a group of 30-50 street lights.
            </p>
            <a href='#' data-aos='fade-up' data-aos-delay={150}>
              Know More <img src='/icon_png.png' alt='Know more' />
            </a>
          </div>
          <svg
            data-aos='fade-up'
            data-aos-delay={200}
            className={styles['nav-right']}
            xmlns='http://www.w3.org/2000/svg'
            width='31'
            height='31'
            viewBox='0 0 31 31'
            fill='none'
            role='button'
            aria-label='Next'
          >
            <path
              d='M12.1456 20.915L17.5914 15.5162L12.1456 10.1174L13.9393 8.33923L21.1788 15.5162L13.9393 22.6932L12.1456 20.915Z'
              fill='#2655FF'
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Products;
