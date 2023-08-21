import styles from './SectionTitle.module.css';

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className={styles.title} data-aos='fade-up' data-aos-delay={0} role='heading'>
      <span>{text}</span>
    </div>
  );
};

export default SectionTitle;
