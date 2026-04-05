import ResourceCard from '@/components/ResourceCard';
import { linksUteisResources } from '@/data/resources';
import styles from './page.module.css';

export default function LinksUteisPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Central de Conhecimento</span>
            <h1>
              Recursos para <span className={styles.accentText}>Transformar</span> a Educação.
            </h1>
            <p>
              Explore uma seleção curada de portais oficiais, plataformas de
              aprendizagem e bibliotecas digitais para apoiar sua jornada
              acadêmica e profissional.
            </p>
            <div className={styles.heroChips}>
              <div className={`${styles.chip} ${styles.chipSecondary}`}>
                <span className="material-symbols-outlined">verified</span>
                Fontes Oficiais
              </div>
              <div className={styles.chipTertiary}>
                <span className="material-symbols-outlined">school</span>
                Acesso Gratuito
              </div>
            </div>
          </div>
        </div>
        <div className={styles.glow1} />
        <div className={styles.glow2} />
      </section>

      {/* Search Bar */}
      <section className={styles.searchBar}>
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Pesquisar portal ou recurso..."
              className={styles.searchInput}
            />
          </div>
          <div className={styles.searchActions}>
            <button className={styles.filterBtn}>
              <span className="material-symbols-outlined">filter_list</span>
              Filtrar
            </button>
            <button className={styles.searchActionBtn}>Buscar</button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.resourceGrid}>
            {linksUteisResources.map((resource) => (
              <ResourceCard key={resource.url} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Callout */}
      <section className={styles.callout}>
        <div className={styles.container}>
          <div className={styles.calloutCard}>
            <div className={styles.calloutImage} />
            <div className={styles.calloutContent}>
              <h2>Qualidade e Curadoria</h2>
              <p>
                Todos os links listados nesta página passam por uma revisão
                periódica para garantir que os conteúdos permaneçam
                acessíveis, seguros e relevantes para o contexto educacional
                brasileiro.
              </p>
              <button className={styles.calloutBtn}>
                Sugerir um Recurso
                <span className="material-symbols-outlined">mail</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
