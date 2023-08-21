import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import styles from './EcoSystem.module.css';

const EcoSystem = () => {
  return (
    <section className={styles['eco-system-section']} id='ecosystem'>
      <SectionTitle text={'Ecosystem'} />
      <h2 data-aos='fade-up' data-aos-delay={0}>
        How does a smart street light ecosystem works?
      </h2>
      <div className={styles['eco-system__working']} data-aos='fade-up' data-aos-delay={0}>
        <div className={styles['eco-system__working--cards-1']}>
          <div
            className={`${styles['eco-system__working--card']} ${styles.controllers}`}
            role='region'
            aria-label='Street Light Controller'
          >
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <picture>
                <img src='/street_light_controler.png' alt='Controllers' />
              </picture>
              <picture>
                <img src='/street_light_controler.png' alt='Controllers' />
              </picture>
            </div>
            <h6>Street Light Controller</h6>
            <p>
              Activates/deactivates in response to motion/light sensing and controls the brightness
              of the street lamp
            </p>
          </div>
          <div
            className={`${styles['eco-system__working--card']} ${styles.gateway}`}
            role='region'
            aria-label='Gateway'
          >
            <picture>
              <img src='/gateway_png.png' alt='Gateway' />
            </picture>
            <h6>Gateway</h6>
            <p>
              Employed for interfacing between a Controller and the Lighting Management Software.
            </p>
          </div>
          <div
            className={`${styles['eco-system__working--card']} ${styles.cloud}`}
            role='region'
            aria-label='Cloud-based Management System'
          >
            <picture>
              <img src='/cloud_based management.png' alt='Cloud' />
            </picture>
            <h6>Cloud-based Management System</h6>
            <p>Collects information from multiple gateways.</p>
          </div>
        </div>
        <div className={styles['eco-system__working--cards-2']}>
          <div
            className={`${styles['eco-system__working--card']} ${styles.users}`}
            role='region'
            aria-label='Users'
          >
            <picture>
              <img src='/users_png.png' alt='Users' />
            </picture>
            <h6>Users</h6>
            <p>
              Data from the cloud is used to monitor and control street lights by the System
              Managers.
            </p>
          </div>
          <div
            className={`${styles['eco-system__working--card']} ${styles.evaluation}`}
            role='region'
            aria-label='Evaluation'
          >
            <picture>
              <img src='/evaluation_png.png' alt='Evaluation' />
            </picture>
            <h6>Evaluation</h6>
            <p>Gathered insights are used to evaluate the performance of the lighting systems.</p>
          </div>
        </div>

        <div className={styles['connector__controller-gateway-cloud']}></div>
        <div className={styles['connector__gateway-users-evaluation']}></div>
        <div className={styles['connector__users-evaluation']}></div>
      </div>
    </section>
  );
};

export default EcoSystem;
