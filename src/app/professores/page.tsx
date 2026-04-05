'use client';

import { useState } from 'react';
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
    url: 'https://novaescola.org.br/formacao',
    ctaLabel: 'Explorar',
  },
  {
    title: 'Canal do Ensino',
    description: 'Cursos gratuitos de metodologias ativas, tecnologia educacional e avaliação formativa.',
    url: 'https://cursocanaldoensino.com.br/',
    ctaLabel: 'Inscrever-se',
  },
];

const FILTERS = [
  { label: 'Todos', category: '' },
  { label: 'Plataformas', category: 'plataforma' },
  { label: 'Legislação', category: 'legislacao' },
];

const RESOURCE_CATEGORIES: Record<string, string> = {
  avamec: 'plataforma',
  'nova escola': 'plataforma',
  'khan academy': 'plataforma',
  bncc: 'legislacao',
  'governo federal': 'legislacao',
};

export default function ProfessoresPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  const filtered = professoresResources.filter((r) => {
    if (activeFilter) {
      const cat = RESOURCE_CATEGORIES[r.title.toLowerCase()];
      if (cat !== activeFilter) return false;
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

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <h1>
            Recursos e Ferramentas para Educadores
          </h1>
          <p>
            Explore as principais plataformas, diretrizes e materiais de apoio
            para sua prática pedagógica.
          </p>
          <div className={styles.heroChips}>
            <div className={styles.chip}>
              <span className="material-symbols-outlined">verified</span>
              Curadoria Oficial
            </div>
            <div className={styles.chip}>
              <span className="material-symbols-outlined">school</span>
              Padrão BNCC
            </div>
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
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.filterChips}>
            {FILTERS.map((f) => (
              <button
                key={f.label}
                className={`${styles.filterChip} ${
                  activeFilter === f.category ? styles.filterChipActive : ''
                }`}
                onClick={() => setActiveFilter(f.category)}
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
          <div className={styles.resourceGrid}>
            {filtered.map((resource) => (
              <ResourceCard key={resource.url} resource={resource} />
            ))}
            {filtered.length === 0 && (
              <p className={styles.noResults}>
                Nenhum resultado encontrado. Tente outro termo.
              </p>
            )}
          </div>
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
