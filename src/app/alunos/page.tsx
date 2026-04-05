'use client';

import { useState } from 'react';
import ResourceCard from '@/components/ResourceCard';
import { alunosResources } from '@/data/resources';
import styles from './page.module.css';

const FILTERS = [
  { label: 'Todos', category: '' },
  { label: 'Matemática', category: 'matematica' },
  { label: 'Idiomas', category: 'idiomas' },
  { label: 'Tecnologia', category: 'tecnologia' },
];

const RESOURCE_CATEGORIES: Record<string, string> = {
  khan: 'matematica',
  'code.org': 'tecnologia',
  duolingo: 'idiomas',
  obmep: 'matematica',
  'brasil escola': 'matematica',
};

export default function AlunosPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  const filtered = alunosResources.filter((r) => {
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
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Área do Estudante</span>
            <h1>
              Onde o seu futuro <br />
              <span className={styles.heroAccent}>começa agora.</span>
            </h1>
            <p>
              Explore as melhores ferramentas gratuitas para reforçar seus
              estudos, aprender coisas novas e se preparar para os desafios
              da escola e da vida.
            </p>
            <button className={styles.heroCta}>
              Começar a Aprender
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder} />
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

          <div className={styles.resourceGrid}>
            {filtered.map((resource) => (
              <ResourceCard key={resource.url} resource={resource} />
            ))}
            {filtered.length === 0 && (
              <p className={styles.noResults}>
                Nenhum resultado encontrado para sua busca. Tente outro termo.
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
          <h2>Explore além</h2>
          <p>
            Cursos gratuitos para complementar seus estudos e expandir seus
            horizontes. Escolha um e comece agora mesmo.
          </p>
          <div className={styles.cursosGrid}>
            <a
              className={styles.cursoCard}
              href="https://www.ev.org.br/"
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
              href="https://www.fundacaobradesco.org.br/"
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
