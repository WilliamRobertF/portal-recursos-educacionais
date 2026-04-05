import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portal Educativo | Hub de Recursos',
  description:
    'Um hub de materiais educativos gratuitos para transformar o aprendizado através da inovação e acessibilidade.',
  keywords: [
    'educação',
    'recursos educacionais',
    'MEC',
    'cursos gratuitos',
    'ensino a distância',
    'ODS 4',
  ],
  authors: [{ name: 'Portal de Recursos Educacionais' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
