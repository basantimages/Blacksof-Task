import styles from './Services.module.css';

const Services = () => {
  return (
    <section
      className={styles['services-section']}
      id='software services'
      aria-labelledby='software-services-heading'
    >
      <h3 data-aos='fade-up' data-aos-delay={0} id='software-services-heading'>
        The platform assists city managers on multiple fronts
      </h3>
      <div className={styles['services-lists']}>
        <div
          className={`${styles['services-list']} ${styles['services-list-even']}`}
          data-aos='fade-up'
          data-aos-delay={0}
          role='list'
          aria-label='Services List 1'
        >
          <div role='listitem'>
            <img src='/image_info.png' alt='services' />
            <p>Saves on power consumption & related costs</p>
          </div>
          <div role='listitem'>
            <img src='/image_info.png' alt='services' />
            <p>Lowers downtimes</p>
          </div>
        </div>
        <div
          className={`${styles['services-list']} ${styles['services-list-odd']}`}
          data-aos='fade-up'
          data-aos-delay={100}
          role='list'
          aria-label='Services List 2'
        >
          <div role='listitem'>
            <img src='/image_info.png' alt='services' />
            <p>Detects power thefts.</p>
          </div>
          <div role='listitem'>
            <img src='/image_info.png' alt='services' />
            <p>Ensures smart monitoring and control of the street light infrastructure.</p>
          </div>
        </div>
        <div
          className={`${styles['services-list']} ${styles['services-list-even']}`}
          data-aos='fade-up'
          data-aos-delay={200}
          role='list'
          aria-label='Services List 3'
        >
          <div role='listitem'>
            <img src='/image_info.png' alt='services' />
            <p>
              Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage
              failures, etc.
            </p>
          </div>
          <div role='listitem'>
            <img src='/image_info.png' alt='services' />
            <p>Ensures security in the neighborhood</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
