'use client';

import { useState } from 'react';
import ResourceCard from '@/components/ResourceCard';
import { paisResources } from '@/data/resources';
import styles from './page.module.css';

const cursosDestaque = [
  {
    title: 'Escola de Pais do Brasil',
    description: 'Palestras e orientações para famílias sobre educação, disciplina positiva e desenvolvimento infantil.',
    url: 'https://www.escoladepais.com.br/',
    ctaLabel: 'Saiba Mais',
  },
  {
    title: 'Fundação Lemann — Família',
    description: 'Artigos e orientações para ajudar no acompanhamento escolar dos filhos em casa.',
    url: 'https://fundacaolemann.org.br/',
    ctaLabel: 'Explorar',
  },
  {
    title: 'Alfazendo',
    description: 'Jogos educativos e atividades práticas para fazer com as crianças e estimular o raciocínio.',
    url: 'https://alfazendo.com.br/',
    ctaLabel: 'Atividades',
  },
];

const FILTERS = [
  { label: 'Todos', category: '' },
  { label: 'Matemática', category: 'matematica' },
  { label: 'Jogos', category: 'jogos' },
];

const RESOURCE_CATEGORIES: Record<string, string> = {
  'escola digital': 'matematica',
  'khan academy': 'matematica',
  'racha cuca': 'jogos',
  'escola virtual': 'matematica',
};

export default function PaisPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  const filtered = paisResources.filter((r) => {
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
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Recursos para Famílias</span>
            <h1>Apoie a jornada educativa do seu filho.</h1>
            <p>
              Explore ferramentas gratuitas e conteúdos de alta qualidade
              selecionados por especialistas para potencializar o aprendizado
              em casa.
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder} />
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
