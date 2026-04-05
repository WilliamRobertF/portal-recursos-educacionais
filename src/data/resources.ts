export interface Resource {
  title: string;
  description: string;
  url: string;
  ctaLabel?: string;
  tag?: string;
  icon: string;
  iconColor?: string;
  highlight?: boolean;
  wide?: boolean;
}

export interface CategoryCard {
  title: string;
  href: string;
  description: string;
  icon: string;
  accent: string;
}

export const categoryCards: CategoryCard[] = [
  {
    title: 'Para Professores',
    href: '/professores',
    description:
      'Planos de aula, ferramentas de gestão e recursos multimídia para enriquecer suas práticas pedagógicas.',
    icon: 'school',
    accent: 'primary-container',
  },
  {
    title: 'Para Pais',
    href: '/pais',
    description:
      'Guia de acompanhamento escolar, dicas de atividades em casa e materiais de apoio ao desenvolvimento socioemocional.',
    icon: 'family_history',
    accent: 'secondary-container',
  },
  {
    title: 'Para Alunos',
    href: '/alunos',
    description:
      'Plataformas de estudo, exercícios interativos e biblioteca digital para potencializar seu protagonismo.',
    icon: 'auto_stories',
    accent: 'tertiary-container',
  },
];

export const professoresResources: Resource[] = [
  {
    title: 'AVAMEC',
    description:
      'Ambiente Virtual de Aprendizagem do Ministério da Educação. Oferece cursos de aperfeiçoamento para profissionais da educação básica.',
    url: 'https://avamec.mec.gov.br/',
    tag: 'Oficial',
    icon: 'cast_for_education',
    iconColor: 'primary',
    ctaLabel: 'Visitar Link',
  },
  {
    title: 'Nova Escola',
    description:
      'Planos de aula completos alinhados à BNCC, reportagens, cursos e materiais práticos para o dia a dia na sala de aula.',
    url: 'https://novaescola.org.br/',
    icon: 'auto_stories',
    iconColor: 'tertiary',
    ctaLabel: 'Visitar Link',
  },
  {
    title: 'Khan Academy',
    description:
      'Plataforma gratuita com exercícios interativos, vídeos e painéis de aprendizado personalizado que permitem aos alunos estudar no seu próprio ritmo.',
    url: 'https://pt.khanacademy.org/',
    icon: 'calculate',
    iconColor: 'secondary',
    ctaLabel: 'Visitar Link',
  },
  {
    title: 'BNCC',
    description:
      'Documento normativo que define o conjunto orgânico e progressivo de aprendizagens essenciais que todos os alunos devem desenvolver.',
    url: 'http://basenacionalcomum.mec.gov.br/',
    tag: 'Oficial',
    icon: 'gavel',
    iconColor: 'primary',
    ctaLabel: 'Visitar Link',
  },
  {
    title: 'Governo Federal (Educação)',
    description:
      'Portal do Ministério da Educação com acesso a sistemas como o PDDE Interativo, FNDE, Censo Escolar e outros serviços fundamentais para a gestão e docência.',
    url: 'https://www.gov.br/mec/pt-br',
    tag: 'Oficial',
    icon: 'account_balance',
    iconColor: 'primary',
    ctaLabel: 'Acessar Portal do MEC',
    wide: true,
  },
];

export const paisResources: Resource[] = [
  {
    title: 'Escola Digital',
    description:
      'Milhares de objetos de aprendizagem gratuitos para apoiar as aulas e o estudo autônomo.',
    url: 'https://escoladigital.org.br/',
    icon: 'school',
    iconColor: 'primary',
    ctaLabel: 'Acessar portal',
  },
  {
    title: 'Khan Academy',
    description:
      'Educação gratuita de classe mundial para qualquer pessoa, em qualquer lugar. Foco em matemática e ciências.',
    url: 'https://pt.khanacademy.org/',
    icon: 'functions',
    iconColor: 'secondary',
    ctaLabel: 'Estudar agora',
  },
  {
    title: 'Racha Cuca',
    description:
      'Jogos inteligentes, quebra-cabeças e exercícios de lógica para exercitar o cérebro de forma divertida.',
    url: 'https://rachacuca.com.br/',
    icon: 'lightbulb',
    iconColor: 'tertiary',
    ctaLabel: 'Desafiar mente',
  },
  {
    title: 'Escola Virtual — Gov.br',
    description:
      'Plataforma oficial com cursos gratuitos em cidadania digital, informática e competências para toda a família.',
    url: 'https://www.ev.org.br/',
    tag: 'Oficial',
    icon: 'hub',
    iconColor: 'primary',
    ctaLabel: 'Ver cursos',
  },
];

export const alunosResources: Resource[] = [
  {
    title: 'Khan Academy',
    description:
      'Aprenda matemática, ciências e muito mais com vídeos curtos e exercícios práticos personalizados. No seu ritmo, de graça.',
    url: 'https://pt.khanacademy.org/',
    icon: 'functions',
    iconColor: '#14bf96',
    ctaLabel: 'Estudar agora',
  },
  {
    title: 'Coursera',
    description:
      'Cursos das melhores universidades do mundo. Conteúdo acadêmico gratuito com certificação disponível.',
    url: 'https://www.coursera.org/',
    icon: 'workspace_premium',
    iconColor: 'primary',
    ctaLabel: 'Ver cursos',
  },
  {
    title: 'Duolingo',
    description:
      'Aprenda Inglês, Espanhol, Francês e outras línguas jogando! Ganhe pontos e suba de nível enquanto domina novos idiomas.',
    url: 'https://www.duolingo.com/',
    icon: 'translate',
    iconColor: '#58cc02',
    ctaLabel: 'Praticar Idiomas',
  },
  {
    title: 'OBMEP',
    description:
      'Prepare-se para a Olimpíada Brasileira de Matemática. Acesse provas anteriores, vídeos e materiais exclusivos para brilhar nos cálculos.',
    url: 'https://www.obmep.org.br/banco-de-questoes/',
    icon: 'military_tech',
    iconColor: '#f57c00',
    ctaLabel: 'Ver Materiais',
  },
  {
    title: 'Brasil Escola',
    description:
      'Reforço escolar completo para todas as matérias. Artigos, resumos para o ENEM e exercícios para ajudar no seu dia a dia escolar.',
    url: 'https://brasilescola.uol.com.br/',
    icon: 'auto_stories',
    iconColor: 'primary',
    ctaLabel: 'Pesquisar Temas',
  },
];

export const linksUteisResources: Resource[] = [
  {
    title: 'MEC — Ministério da Educação',
    description:
      'Portal central do governo brasileiro para políticas educacionais, diretrizes curriculares e informações sobre programas nacionais.',
    url: 'https://www.gov.br/mec/pt-br',
    tag: 'Oficial',
    icon: 'account_balance',
    iconColor: 'primary',
    ctaLabel: 'Acessar Portal',
  },
  {
    title: 'Portal Gov.br',
    description:
      'Serviços digitais unificados para o cidadão, incluindo certidões, inscrições em programas e acesso a dados educacionais.',
    url: 'https://www.gov.br/pt-br/assuntos/educacao',
    tag: 'Oficial',
    icon: 'gavel',
    iconColor: 'primary',
    ctaLabel: 'Ver Serviços',
  },
  {
    title: 'Inep — ENEM',
    description:
      'Plataforma oficial para inscrições, provas anteriores e resultados do Exame Nacional do Ensino Médio.',
    url: 'https://enem.inep.gov.br/',
    tag: 'Oficial',
    icon: 'edit_note',
    iconColor: 'primary',
    ctaLabel: 'Cronograma',
  },
  {
    title: 'TED-Ed',
    description:
      'Lições em vídeo de alta qualidade sobre uma vasta gama de tópicos, criadas por educadores e animadores globais.',
    url: 'https://ed.ted.com/',
    icon: 'play_circle',
    iconColor: 'tertiary',
    ctaLabel: 'Explorar Lições',
  },
  {
    title: 'Coursera',
    description:
      'Cursos online das melhores universidades do mundo. Conteúdo acadêmico rigoroso com opções de certificação gratuita.',
    url: 'https://www.coursera.org/',
    icon: 'auto_stories',
    iconColor: 'primary',
    ctaLabel: 'Ver Cursos',
  },
  {
    title: 'UNESCO Biblioteca Digital',
    description:
      'Repositório global de conhecimento sobre educação, ciência e cultura, com milhares de publicações gratuitas.',
    url: 'https://www.wdl.org/pt/',
    icon: 'public',
    iconColor: 'secondary',
    ctaLabel: 'Acessar Acervo',
  },
];
