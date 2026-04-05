import type { Resource } from '@/data/resources';
import styles from './ResourceCard.module.css';

const TOKEN_COLORS: Record<string, string> = {
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  tertiary: 'var(--tertiary)',
  error: '#ba1a1a',
};

export default function ResourceCard({ resource }: { resource: Resource }) {
  const iconStyle = resource.iconColor
    ? {
        color:
          resource.iconColor.startsWith('#') || resource.iconColor.startsWith('var(')
            ? resource.iconColor
            : TOKEN_COLORS[resource.iconColor] ?? 'var(--primary)',
      }
    : undefined;

  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        <span className="material-symbols-outlined" style={iconStyle}>
          {resource.icon}
        </span>
      </div>
      {resource.tag && (
        <span className={styles.tag}>{resource.tag}</span>
      )}
      <h3 className={styles.title}>{resource.title}</h3>
      <p className={styles.description}>{resource.description}</p>
      <a
        className={styles.cta}
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {resource.ctaLabel ?? 'Acessar'}
        <span className="material-symbols-outlined">open_in_new</span>
      </a>
    </article>
  );
}
