'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Professores', href: '/professores' },
    { label: 'Pais', href: '/pais' },
    { label: 'Alunos', href: '/alunos' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Portal Educativo
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={styles.hamburger}></span>
        </button>

        <nav id="main-nav" className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
