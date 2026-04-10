'use client';

import { useState, useMemo, useEffect } from 'react';
import ResourceCard from '@/components/ResourceCard';
import { professoresResources } from '@/data/resources';
import styles from './page.module.css';

const cursosDestaque = [
  {
    title: 'Formação Docentes — AVAMEC',
    description: 'Cursos de aperfeiçoamento gratuitos para professores da educação básica, promovidos pelo MEC.',
    url: 'https://avamec.mec.gov.br/',
    ctaLabel: 'Ver Cursos',
  },
  {
    title: 'Formação Nova Escola',
    description: 'Cursos práticos sobre planejamento, avaliação e BNCC com certificação.',
    url: 'https://cursos.novaescola.org.br/',
    ctaLabel: 'Explorar',
  },
  {
    title: 'Canal do Ensino',
    description: 'Cursos gratuitos de metodologias ativas, tecnologia educacional e avaliação formativa.',
    url: 'https://canaldoensino.com.br/',
    ctaLabel: 'Inscrever-se',
  },
];

const ITEMS_PER_PAGE = 6;

const FILTERS = [
  { label: 'Todos', category: '' },
  { label: 'Gov', category: 'gov' },
  { label: 'Grátis', category: 'gratis' },
  { label: 'Ferramenta', category: 'ferramenta' },
];

export default function ProfessoresPage() {
  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = useMemo(() => {
    return professoresResources.filter((r) => {
      if (activeFilters.length > 0) {
        const rTags = r.tags ?? [];
        let matched = false;
        for (const filter of activeFilters) {
          if (filter === 'gov' && rTags.includes('GOV')) { matched = true; break; }
          if (filter === 'gratis' && rTags.includes('GRÁTIS')) { matched = true; break; }
          if (filter === 'ferramenta' && rTags.includes('FERRAMENTA')) { matched = true; break; }
        }
        if (!matched) return false;
      }
      if (search) {
        const q = search.toLowerCase();
        return (
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, activeFilters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

  const displayItems = mounted ? filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  ) : filtered;

  function handlePageChange(page: number) {
    setCurrentPage(page);
    document.getElementById('resource-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function toggleFilter(category: string) {
    if (category === '') {
      setActiveFilters([]);
    } else {
      setActiveFilters((prev) =>
        prev.includes(category)
          ? prev.filter((f) => f !== category)
          : [...prev, category]
      );
    }
    setCurrentPage(1);
  }

  function handleSearchChange(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  function isChipActive(category: string) {
    if (category === '') return activeFilters.length === 0;
    return activeFilters.includes(category);
  }

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>
              Recursos e Ferramentas para Educadores
            </h1>
            <p>
              Explore as principais plataformas, diretrizes e materiais de apoio
              para sua prática pedagógica.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src="/images/professores_illustration.png" alt="Recursos para professores" className={styles.heroImg} />
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className={styles.searchBar}>
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Buscar recursos educacionais... (Ex: BNCC, Khan Academy, Nova Escola)"
              className={styles.searchInput}
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
          <div className={styles.filterCarousel}>
            {FILTERS.map((f) => (
              <button
                key={f.label}
                className={`${styles.filterChip} ${
                  isChipActive(f.category) ? styles.filterChipActive : ''
                }`}
                onClick={() => toggleFilter(f.category)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section Header */}
      <section className={styles.pageSectionHeader}>
        <div className={styles.container}>
          <h2>Plataformas de Aprendizado</h2>
          <div className={styles.sectionDivider} />
          <p>
            Conheça as plataformas parceiras que oferecem ferramentas, métricas
            e conteúdos de apoio para facilitar sua rotina em sala de aula.
          </p>
        </div>
      </section>

      {/* Resource Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div id="resource-grid" className={styles.resourceGrid}>
            {displayItems.map((resource) => (
              <ResourceCard key={resource.url} resource={resource} />
            ))}
            {filtered.length === 0 && (
              <p className={styles.noResults}>
                Nenhum resultado encontrado. Tente outro termo.
              </p>
            )}
          </div>

          {mounted && totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                className={styles.pageBtn}
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`${styles.pageNumber} ${
                    currentPage === page ? styles.pageNumberActive : ''
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className={styles.pageBtn}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cursos em Destaque */}
      <section className={styles.cursosSection}>
        <div className={styles.container}>
          <div className={styles.cursosHeader}>
            <div className={styles.cursosLine} />
            <span>Cursos Sugeridos</span>
          </div>
          <h2>Aprofunde sua formação</h2>
          <p>
            Selecionamos formações gratuitas que complementam os recursos
            acima e fortalecem sua prática em sala de aula.
          </p>
          <div className={styles.cursosGrid}>
            {cursosDestaque.map((curso) => (
              <a
                key={curso.url}
                className={styles.cursoCard}
                href={curso.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">
                  cast_for_education
                </span>
                <h3>{curso.title}</h3>
                <p>{curso.description}</p>
                <div className={styles.cursoArrow}>
                  {curso.ctaLabel}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
