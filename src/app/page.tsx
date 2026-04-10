import { categoryCards } from '@/data/resources';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroSub}>
              ODS 4: EDUCAÇÃO DE QUALIDADE
            </span>
            <h1>
              Portal de <span className={styles.accentText}>Recursos</span>{' '}
              Educacionais
            </h1>
            <p>
              Um hub de materiais educativos gratuitos para transformar o
              aprendizado através da inovação e acessibilidade.
            </p>
            <div className={styles.heroButtons}>
              <a href="#perfis" className={styles.btnPrimary}>
                Explorar Catálogo
              </a>
              <a href="#sobre" className={styles.btnSecondary}>
                Sobre o Projeto
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/images/home_hero.png" alt="Portal de Recursos" className={styles.heroImg} />
          </div>
        </div>
      </section>

      {/* Category Bento Grid */}
      <section id="perfis" className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Acesso por Perfil</h2>
            <p>
              Conteúdos personalizados para cada etapa da jornada educacional.
            </p>
          </div>
          <div className={styles.bentoGrid}>
            {categoryCards.map((card) => (
              <a key={card.href} href={card.href} className={styles.bentoCard}>
                <div
                  className={styles.iconCircle}
                  data-icon={card.icon}
                  data-accent={card.accent}
                >
                  <span className="material-symbols-outlined">
                    {card.icon}
                  </span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className={styles.cardArrow}>
                  <span>Ver recursos</span>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section id="sobre" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutMosaic}>
              <div className={styles.mosaicCol}>
                <div className={styles.mosaicImage}>
                  <img src="/images/mosaic_1.png" alt="Estudantes" className={styles.mosaicImg} />
                </div>
                <div className={styles.mosaicStat}>
                  <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', marginBottom: '8px', display: 'block' }}>diversity_3</span>
                  <small>Para Todos os Públicos</small>
                </div>
              </div>
              <div className={styles.mosaicCol}>
                <div className={styles.mosaicStat}>
                  <span>150+</span>
                  <small>Plataformas & Ferramentas</small>
                </div>
                <div className={styles.mosaicImage}>
                  <img src="/images/mosaic_2.png" alt="Mundo Educativo" className={styles.mosaicImg} />
                </div>
              </div>
            </div>
            <div className={styles.aboutText}>
              <div className={styles.aboutSubtitle}>
                <div className={styles.aboutLine} />
                <span>Sobre o Projeto</span>
              </div>
              <h2>
                Educação de qualidade, para todos
              </h2>
              <div className={styles.aboutParagraphs}>
                <p>
                  O <strong>Portal de Recursos Educacionais</strong> é um
                  projeto de extensão universitária desenvolvido pela WRSoft
                  para democratizar o acesso à educação de qualidade no Brasil.
                </p>
                <p>
                  Este projeto é comprometido com o{' '}
                  <strong>Objetivo de Desenvolvimento Sustentável 4 (ODS 4)</strong>{' '}
                  da ONU, buscando garantir uma educação inclusiva, equitativa e
                  de qualidade para todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
