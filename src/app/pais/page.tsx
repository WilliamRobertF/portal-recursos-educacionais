'use client';

import { useState, useMemo, useEffect } from 'react';
import ResourceCard from '@/components/ResourceCard';
import { paisResources } from '@/data/resources';
import styles from './page.module.css';

const ITEMS_PER_PAGE = 6;

const cursosDestaque = [
  {
    title: 'Escola de Pais do Brasil',
    description: 'Palestras e orientações para famílias sobre educação, disciplina positiva e desenvolvimento infantil.',
    url: 'https://escoladepais.org.br/',
    ctaLabel: 'Saiba Mais',
  },
  {
    title: 'Fundação Lemann — Família',
    description: 'Artigos e orientações para ajudar no acompanhamento escolar dos filhos em casa.',
    url: 'https://fundacaolemann.org.br/',
    ctaLabel: 'Explorar',
  },
  {
    title: 'Tempo Junto',
    description: 'Ideias diárias de brincadeiras e atividades criativas para os pais fazerem com os filhos, estimulando o desenvolvimento.',
    url: 'https://www.tempojunto.com/',
    ctaLabel: 'Ver Atividades',
  },
];

const FILTERS = [
  { label: 'Todos', category: '' },
  { label: 'Gov', category: 'gov' },
  { label: 'Grátis', category: 'gratis' },
  { label: 'Ferramenta', category: 'ferramenta' },
];

export default function PaisPage() {
  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = useMemo(() => {
    return paisResources.filter((r) => {
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
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>Apoie a jornada educativa do seu filho.</h1>
            <p>
              Explore ferramentas gratuitas e conteúdos de alta qualidade
              selecionados por especialistas para potencializar o aprendizado
              em casa.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src="/images/pais_illustration.png" alt="Pais e filhos" className={styles.heroImg} />
          </div>
        </div>
        <div className={styles.glow} />
      </section>

      {/* Search & Filter */}
      <section className={styles.searchBar}>
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="O que você procura? (Ex: Jogos educativos, Exercícios...)"
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

      {/* Resource Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Plataformas de Aprendizado</h2>
            <div className={styles.sectionDivider} />
            <p>
              Conheça os portais parceiros que oferecem exercícios, vídeos e
              atividades interativas para todas as idades.
            </p>
          </div>
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
            <span>Para Ir Além</span>
          </div>
          <h2>Recursos para famílias</h2>
          <p>
            Materiais complementares para apoiar o desenvolvimento dos seus
            filhos e fortalecer a parceria entre casa e escola.
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
                  family_restroom
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
