import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>WRSoft</div>
          <p className={styles.description}>
            Fomentando a excelência na educação brasileira através de recursos
            digitais acessíveis e de alta qualidade.
          </p>
          <div className={styles.socialIcons}>
            <a
              href="mailto:williamrobert98@gmail.com"
              className={styles.socialLink}
              title="Email"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.odsBadge}>
            <div className={styles.unLogo}>
              <span className="material-symbols-outlined">public</span>
            </div>
            <div>
              <div className={styles.odsTitle}>ODS 4: Educação de Qualidade</div>
              <p className={styles.odsDescription}>
                Assegurar a educação inclusiva e equitativa e de qualidade para todos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.odsRibbon}>
        © 2026 Portal de Recursos Educacionais. Desenvolvido por WRSoft.
      </div>
    </footer>
  );
}
