'use client';

import { useState, useMemo, useEffect } from 'react';
import ResourceCard from '@/components/ResourceCard';
import { alunosResources } from '@/data/resources';
import styles from './page.module.css';

const ITEMS_PER_PAGE = 6;

const FILTERS = [
  { label: 'Todos', category: '' },
  { label: 'Gov', category: 'gov' },
  { label: 'Grátis', category: 'gratis' },
  { label: 'Ferramenta', category: 'ferramenta' },
];

function matchesActiveFilters(resource: typeof alunosResources[number], activeFilters: string[]): boolean {
  if (activeFilters.length === 0) return true;

  const rTags = resource.tags ?? [];
  for (const filter of activeFilters) {
    if (filter === 'gov' && rTags.includes('GOV')) return true;
    if (filter === 'gratis' && rTags.includes('GRÁTIS')) return true;
    if (filter === 'ferramenta' && rTags.includes('FERRAMENTA')) return true;
  }
  return false;
}

export default function AlunosPage() {
  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = useMemo(() => {
    return alunosResources.filter((r) => {
      if (!matchesActiveFilters(r, activeFilters)) return false;
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
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>
              Suas ferramentas de estudo,
              tudo em um só lugar.
            </h1>
            <p>
              Explore as melhores plataformas gratuitas para reforçar seus
              estudos, aprender coisas novas e se preparar para os desafios
              da escola e da vida.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src="/images/alunos_illustration.png" alt="Estudos" className={styles.heroImg} />
            <div className={styles.blurShape} />
          </div>
        </div>
        <div className={styles.heroSv} />
      </section>

      {/* Search & Filter */}
      <section className={styles.searchBar}>
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="O que você quer aprender? (Ex: Matemática, Programação...)"
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

      {/* Resources */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Plataformas de Aprendizado</h2>
            <div className={styles.sectionDivider} />
            <p>
              Selecionamos os melhores recursos globais e nacionais para
              ajudar você a conquistar seus objetivos escolares.
            </p>
          </div>

          <div id="resource-grid" className={styles.resourceGrid}>
            {displayItems.map((resource) => (
              <ResourceCard key={resource.url} resource={resource} />
            ))}
            {filtered.length === 0 && (
              <p className={styles.noResults}>
                Nenhum resultado encontrado para sua busca. Tente outro termo.
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
          <h2>Explore além</h2>
          <p>
            Cursos gratuitos para complementar seus estudos e expandir seus
            horizontes. Escolha um e comece agora mesmo.
          </p>
          <div className={styles.cursosGrid}>
            <a
              className={styles.cursoCard}
              href="https://www.escolavirtual.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">computer</span>
              <h3>Escola Virtual — Gov.br</h3>
              <p>Cursos gratuitos de informática, cidadania digital, competências básicas e muito mais.</p>
              <div className={styles.cursoArrow}>
                Explorar
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </a>
            <a
              className={styles.cursoCard}
              href="https://www.ev.org.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">menu_book</span>
              <h3>Fundação Bradesco</h3>
              <p>Cursos online gratuitos de matemática, português, informática e gestão para todas as idades.</p>
              <div className={styles.cursoArrow}>
                Inscrever-se
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </a>
            <a
              className={styles.cursoCard}
              href="https://www.udemy.com/courses/free/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">code</span>
              <h3>Udemy — Cursos Gratuitos</h3>
              <p>Centenas de cursos gratuitos em programação, design, marketing e muito mais.</p>
              <div className={styles.cursoArrow}>
                Começar
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
