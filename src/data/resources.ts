export interface Resource {
  title: string;
  description: string;
  url: string;
  ctaLabel?: string;
  tags?: string[];
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
    tags: ['GOV', 'GRÁTIS'],
    icon: 'cast_for_education',
    iconColor: 'primary',
    ctaLabel: 'Visitar Link',
  },
  {
    title: 'Nova Escola',
    description:
      'Planos de aula completos alinhados à BNCC, reportagens, cursos e materiais práticos para o dia a dia na sala de aula.',
    url: 'https://novaescola.org.br/',
    tags: ['GRÁTIS'],
    icon: 'auto_stories',
    iconColor: 'tertiary',
    ctaLabel: 'Visitar Link',
  },
  {
    title: 'Khan Academy',
    description:
      'Plataforma gratuita com exercícios interativos, vídeos e painéis de aprendizado personalizado que permitem aos alunos estudar no seu próprio ritmo.',
    url: 'https://pt.khanacademy.org/',
    tags: ['GRÁTIS'],
    icon: 'calculate',
    iconColor: 'secondary',
    ctaLabel: 'Visitar Link',
  },
  {
    title: 'Aprendizagem Criativa',
    description:
      'Plataforma de metodologias ativas e aprendizagem criativa com oficinas, projetos e planos de aula alinhados à BNCC para o ensino de ciências e tecnologia.',
    url: 'https://www.aprendizagemcriativa.com.br/',
    tags: ['GRÁTIS'],
    icon: 'biotech',
    iconColor: 'secondary',
    ctaLabel: 'Explorar práticas',
  },
  {
    title: 'SME São Paulo — Materiais de Apoio',
    description:
      'Secretaria Municipal de Educação disponibiliza materiais didáticos, cadernos e recursos para planejamento docente alinhados ao currículo da rede.',
    url: 'https://educacao.sme.prefeitura.sp.gov.br/',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'menu_book',
    iconColor: 'primary',
    ctaLabel: 'Ver materiais',
  },
  {
    title: 'MEC Red',
    description:
      'Conteúdos 3D interativos de realidade aumentada para sala de aula. Recursos visuais de ciências, história e biologia para tornar o aprendizado imersivo.',
    url: 'https://mecred.mec.gov.br/',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'view_in_ar',
    iconColor: 'tertiary',
    ctaLabel: 'Ver conteúdo 3D',
  },
  {
    title: 'BNCC',
    description:
      'Documento normativo que define o conjunto orgânico e progressivo de aprendizagens essenciais que todos os alunos devem desenvolver.',
    url: 'http://basenacionalcomum.mec.gov.br/',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'gavel',
    iconColor: 'primary',
    ctaLabel: 'Visitar Link',
  },
  {
    title: 'SAEB (INEP)',
    description:
      'Sistema de Avaliação da Educação Básica. Ferramenta essencial para acompanhar o desempenho educacional e o IDEB da sua escola ou rede.',
    url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/saeb',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'assessment',
    iconColor: 'primary',
    ctaLabel: 'Ver resultados',
  },
  {
    title: 'Governo Federal (Educação)',
    description:
      'Portal do Ministério da Educação com acesso a sistemas como o PDDE Interativo, FNDE, Censo Escolar e outros serviços fundamentais para a gestão e docência.',
    url: 'https://www.gov.br/mec/pt-br',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'account_balance',
    iconColor: 'primary',
    ctaLabel: 'Acessar Portal do MEC',
  },
  {
    title: 'Porvir',
    description:
      'Maior portal de inovação educacional do Brasil: metodologias ativas, tecnologia aplicada à educação, formação docente e tendências pedagógicas.',
    url: 'https://porvir.org/',
    tags: ['GRÁTIS'],
    icon: 'rocket_launch',
    iconColor: 'secondary',
    ctaLabel: 'Explorar inovações',
  },
  {
    title: 'Lumini — Recursos Educacionais',
    description:
      'Plataforma de soluções educacionais digitais com conteúdos alinhados à BNCC, formação docente e ferramentas de gestão pedagógica.',
    url: 'https://www.lumini.educ.br/',
    tags: ['GRÁTIS'],
    icon: 'diamond',
    iconColor: 'tertiary',
    ctaLabel: 'Ver recursos',
  },
  {
    title: 'Canva for Education',
    description:
      'Plataforma de design visual gratuito para escolas e educadores criarem materiais didáticos profissionais.',
    url: 'https://www.canva.com/education/',
    tags: ['FERRAMENTA', 'GRÁTIS'],
    icon: 'palette',
    iconColor: 'secondary',
    ctaLabel: 'Criar materiais',
  },
  {
    title: 'Google Workspace for Education',
    description:
      'Suite de ferramentas colaborativas para escolas: Google Sala de Aula, Drive, Documentos e Meet em versão gratuita para educação.',
    url: 'https://edu.google.com/products/workspace-for-education/',
    tags: ['FERRAMENTA', 'GRÁTIS'],
    icon: 'work',
    iconColor: 'tertiary',
    ctaLabel: 'Conhecer',
  },
  {
    title: 'Itaú Social',
    description:
      'Programas gratuitos de formação educacional em parceria com UNICEF, com foco em equidade e qualidade na educação pública.',
    url: 'https://itausocial.org.br/',
    tags: ['GRÁTIS'],
    icon: 'volunteer_activism',
    iconColor: 'secondary',
    ctaLabel: 'Conhecer projetos',
  },
  {
    title: 'Instituto Unibanco',
    description:
      'Foco no Ensino Médio público com programas como Jovem de Futuro e ferramentas de gestão escolar para educadores.',
    url: 'https://www.institutounibanco.org.br/',
    tags: ['GRÁTIS'],
    icon: 'groups',
    iconColor: 'primary',
    ctaLabel: 'Ver iniciativas',
  },
  {
    title: 'Fundação Roberto Marinho',
    description:
      'Criadora do Telecurso e mantenedora do Canal Futura, com materiais gratuitos para ensino fundamental e médio.',
    url: 'https://www.frm.org.br/',
    tags: ['GRÁTIS'],
    icon: 'live_tv',
    iconColor: 'tertiary',
    ctaLabel: 'Explorar',
  },
  {
    title: 'Scielo',
    description:
      'Biblioteca científica digital aberta com artigos de periódicos acadêmicos brasileiros. Essencial para pesquisas e leitura acadêmica.',
    url: 'https://scielo.org/',
    tags: ['GRÁTIS'],
    icon: 'science',
    iconColor: 'secondary',
    ctaLabel: 'Pesquisar artigos',
  },
];

export const paisResources: Resource[] = [
  {
    title: 'Porvir',
    description:
      'Portal de notícias e conteúdos sobre inovação na educação, metodologias ativas e tecnologia para apoiar pais na jornada escolar.',
    url: 'https://porvir.org/',
    tags: ['GRÁTIS'],
    icon: 'lightbulb',
    iconColor: 'primary',
    ctaLabel: 'Ler artigos',
  },
  {
    title: 'Khan Academy',
    description:
      'Educação gratuita de classe mundial para qualquer pessoa, em qualquer lugar. Foco em matemática e ciências.',
    url: 'https://pt.khanacademy.org/',
    tags: ['GRÁTIS'],
    icon: 'functions',
    iconColor: 'secondary',
    ctaLabel: 'Estudar agora',
  },
  {
    title: 'Racha Cuca',
    description:
      'Jogos inteligentes, quebra-cabeças e exercícios de lógica para exercitar o cérebro de forma divertida.',
    url: 'https://rachacuca.com.br/',
    tags: ['GRÁTIS'],
    icon: 'lightbulb',
    iconColor: 'tertiary',
    ctaLabel: 'Desafiar mente',
  },
  {
    title: 'Escola Virtual — Gov.br',
    description:
      'Plataforma oficial com cursos gratuitos em cidadania digital, informática e competências para toda a família.',
    url: 'https://www.ev.org.br/',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'hub',
    iconColor: 'primary',
    ctaLabel: 'Ver cursos',
  },
  {
    title: 'Fundação Bradesco',
    description:
      'Cursos gratuitos de matemática, português, informática e cidadania digital para todas as idades. Com certificação reconhecida.',
    url: 'https://escolavirtual.org.br/',
    tags: ['GRÁTIS'],
    icon: 'menu_book',
    iconColor: 'primary',
    ctaLabel: 'Ver cursos',
  },
  {
    title: 'Santander Open Academy',
    description:
      'Programa do Santander com cursos gratuitos em competências digitais, liderança e desenvolvimento profissional.',
    url: 'https://www.santanderopenacademy.com/',
    tags: ['GRÁTIS'],
    icon: 'workspace_premium',
    iconColor: 'secondary',
    ctaLabel: 'Explorar cursos',
  },
  {
    title: 'Fundação Lemann',
    description:
      'Referência em educação no Brasil, com conteúdos gratuitos sobre empreendedorismo, tecnologia educacional e apoio à jornada de aprendizagem.',
    url: 'https://fundacaolemann.org.br/',
    tags: ['GRÁTIS'],
    icon: 'lightbulb',
    iconColor: 'secondary',
    ctaLabel: 'Conhecer',
  },
  {
    title: 'Instituto Natura',
    description:
      'ONG que oferece programas educativos gratuitos, conteúdos socioemocionais e ferramentas para famílias fortalecerem o aprendizado em casa.',
    url: 'https://institutonatura.org/',
    tags: ['GRÁTIS'],
    icon: 'volunteer_activism',
    iconColor: 'tertiary',
    ctaLabel: 'Explorar',
  },
  {
    title: 'Instituto Península',
    description:
      'Iniciativas educacionais gratuitas com foco em desenvolvimento integral, formação de estudantes e engajamento das famílias na escola.',
    url: 'https://institutopeninsula.org.br/',
    tags: ['GRÁTIS'],
    icon: 'diversity_3',
    iconColor: 'primary',
    ctaLabel: 'Ver programas',
  },
  {
    title: 'Canal Futura',
    description:
      'Canal educativo com conteúdos pedagógicos, reportagens e materiais de apoio para acompanhar o aprendizado dos filhos em casa.',
    url: 'https://canalfutura.org/',
    tags: ['GRÁTIS'],
    icon: 'live_tv',
    iconColor: 'tertiary',
    ctaLabel: 'Assistir',
  },
  {
    title: 'Udemy',
    description:
      'Maior marketplace de cursos online do mundo. Milhares de opções em tecnologia, negócios, idiomas e desenvolvimento pessoal.',
    url: 'https://www.udemy.com/',
    icon: 'smart_toy',
    iconColor: 'primary',
    ctaLabel: 'Explorar cursos',
  },
  {
    title: 'Escola Digital',
    description:
      'Plataforma da SME-SP com trilhas de aprendizagem, videoaulas e atividades organizadas por ano e disciplina. Ideal para pais acompanharem o conteúdo que o filho está estudando.',
    url: 'https://escoladigital.org.br/',
    tags: ['GRÁTIS'],
    icon: 'school',
    iconColor: 'primary',
    ctaLabel: 'Explorar conteúdo',
  },
  {
    title: 'Khan Academy (Para Pais)',
    description:
      'Além dos exercícios para alunos, pais podem criar uma conta de coach e acompanhar o progresso dos filhos, identificar dificuldades e sugerir atividades personalizadas.',
    url: 'https://pt.khanacademy.org/coaches',
    tags: ['GRÁTIS', 'FERRAMENTA'],
    icon: 'supervisor_account',
    iconColor: 'secondary',
    ctaLabel: 'Acompanhar progresso',
  },
  {
    title: 'Family Link (Google)',
    description:
      'App gratuito do Google para pais gerenciarem o uso de dispositivos pelos filhos: definem tempo de tela, aprovam apps instalados e acompanham a atividade digital.',
    url: 'https://families.google.com/familylink/',
    tags: ['GRÁTIS', 'FERRAMENTA'],
    icon: 'devices',
    iconColor: 'tertiary',
    ctaLabel: 'Configurar',
  },
  {
    title: 'iEducação',
    description:
      'Atividades e recursos pedagógicos prontos para uso, organizados por BNCC. Pais podem apoiar as tarefas escolares com materiais alinhados ao currículo da escola.',
    url: 'https://ieducacao.com/',
    icon: 'assignment',
    iconColor: '#2e7d32',
    ctaLabel: 'Ver atividades',
  },
];

export const alunosResources: Resource[] = [
  {
    title: 'Khan Academy',
    description:
      'Aprenda matemática, ciências e muito mais com vídeos curtos e exercícios práticos personalizados. No seu ritmo, de graça.',
    url: 'https://pt.khanacademy.org/',
    tags: ['GRÁTIS'],
    icon: 'functions',
    iconColor: '#14bf96',
    ctaLabel: 'Estudar agora',
  },
  {
    title: 'Coursera',
    description:
      'Cursos das melhores universidades do mundo. Conteúdo acadêmico gratuito com certificação disponível.',
    url: 'https://www.coursera.org/',
    tags: ['GRÁTIS'],
    icon: 'workspace_premium',
    iconColor: 'primary',
    ctaLabel: 'Ver cursos',
  },
  {
    title: 'Duolingo',
    description:
      'Aprenda Inglês, Espanhol, Francês e outras línguas jogando! Ganhe pontos e suba de nível enquanto domina novos idiomas.',
    url: 'https://www.duolingo.com/',
    tags: ['FERRAMENTA', 'GRÁTIS'],
    icon: 'translate',
    iconColor: '#58cc02',
    ctaLabel: 'Praticar Idiomas',
  },
  {
    title: 'edX',
    description:
      'Cursos gratuitos de Harvard, MIT e universidades globais. Acesse conteúdo de alta qualidade sem custo no modo auditoria.',
    url: 'https://www.edx.org/',
    tags: ['GRÁTIS'],
    icon: 'school',
    iconColor: 'primary',
    ctaLabel: 'Explorar cursos',
  },
  {
    title: 'OBMEP',
    description:
      'Prepare-se para a Olimpíada Brasileira de Matemática. Acesse provas anteriores, vídeos e materiais exclusivos para brilhar nos cálculos.',
    url: 'https://www.obmep.org.br/banco-de-questoes/',
    tags: ['GRÁTIS'],
    icon: 'military_tech',
    iconColor: '#f57c00',
    ctaLabel: 'Ver Materiais',
  },
  {
    title: 'Brasil Escola',
    description:
      'Reforço escolar completo para todas as matérias. Artigos, resumos para o ENEM e exercícios para ajudar no seu dia a dia escolar.',
    url: 'https://brasilescola.uol.com.br/',
    tags: ['GRÁTIS'],
    icon: 'auto_stories',
    iconColor: 'primary',
    ctaLabel: 'Pesquisar Temas',
  },
  {
    title: 'Domínio Público',
    description:
      'Biblioteca digital do governo federal com milhares de obras literárias, científicas e artísticas gratuitas em português.',
    url: 'https://www.dominiopublico.gov.br/',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'auto_awesome',
    iconColor: 'secondary',
    ctaLabel: 'Explorar acervo',
  },
  {
    title: 'FreeCodeCamp',
    description:
      'Aprenda programação de graça com desafios práticos e certificações em HTML, CSS, JavaScript, Python e muito mais.',
    url: 'https://www.freecodecamp.org/portuguese/',
    tags: ['GRÁTIS'],
    icon: 'code',
    iconColor: '#f5a623',
    ctaLabel: 'Começar agora',
  },
  {
    title: 'Scratch (MIT)',
    description:
      'Plataforma do MIT para aprender programação criando jogos, animações e histórias. Ideal para iniciantes de todas as idades.',
    url: 'https://scratch.mit.edu/',
    tags: ['FERRAMENTA', 'GRÁTIS'],
    icon: 'toys',
    iconColor: '#f57c00',
    ctaLabel: 'Criar projetos',
  },
  {
    title: 'GeoGebra',
    description:
      'Software gratuito de matemática com geometria, álgebra, gráficos e cálculo interativo. Usado em escolas do mundo todo.',
    url: 'https://www.geogebra.org/',
    tags: ['FERRAMENTA', 'GRÁTIS'],
    icon: 'calculate',
    iconColor: 'tertiary',
    ctaLabel: 'Explorar ferramentas',
  },
  {
    title: 'Udemy',
    description:
      'Maior plataforma de cursos online com opções pagas acessíveis e cursos gratuitos em tecnologia, design e negócios.',
    url: 'https://www.udemy.com/',
    icon: 'smart_toy',
    iconColor: 'primary',
    ctaLabel: 'Explorar cursos',
  },
  {
    title: 'Alura',
    description:
      'Plataforma de cursos de tecnologia em português. Formação em programação, dados, IA, design e mais com assinatura.',
    url: 'https://www.alura.com.br/',
    icon: 'code',
    iconColor: '#051937',
    ctaLabel: 'Ver planos',
  },
];

export const linksUteisResources: Resource[] = [
  {
    title: 'MEC — Ministério da Educação',
    description:
      'Portal central do governo brasileiro para políticas educacionais, diretrizes curriculares e informações sobre programas nacionais.',
    url: 'https://www.gov.br/mec/pt-br',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'account_balance',
    iconColor: 'primary',
    ctaLabel: 'Acessar Portal',
  },
  {
    title: 'Portal Gov.br',
    description:
      'Central de serviços educacionais do governo federal, incluindo programas e iniciativas para estudantes e famílias.',
    url: 'https://www.gov.br/pt-br/assuntos/educacao',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'gavel',
    iconColor: 'primary',
    ctaLabel: 'Ver Serviços',
  },
  {
    title: 'Inep — ENEM',
    description:
      'Plataforma oficial para inscrições, provas anteriores e resultados do Exame Nacional do Ensino Médio.',
    url: 'https://enem.inep.gov.br/',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'edit_note',
    iconColor: 'primary',
    ctaLabel: 'Cronograma',
  },
  {
    title: 'TED-Ed',
    description:
      'Lições em vídeo de alta qualidade sobre uma vasta gama de tópicos, criadas por educadores e animadores globais.',
    url: 'https://ed.ted.com/',
    tags: ['GRÁTIS'],
    icon: 'play_circle',
    iconColor: 'tertiary',
    ctaLabel: 'Explorar Lições',
  },
  {
    title: 'Coursera',
    description:
      'Cursos online das melhores universidades do mundo. Conteúdo acadêmico rigoroso com opções de certificação gratuita.',
    url: 'https://www.coursera.org/',
    tags: ['GRÁTIS'],
    icon: 'auto_stories',
    iconColor: 'primary',
    ctaLabel: 'Ver Cursos',
  },
  {
    title: 'Biblioteca Nacional Digital',
    description:
      'Acervo digital da Biblioteca Nacional do Brasil com obras raras, manuscritos, fotografias históricas e periódicos sobre cultura brasileira.',
    url: 'http://bndigital.bn.gov.br/',
    tags: ['GOV', 'GRÁTIS'],
    icon: 'collections_bookmark',
    iconColor: 'secondary',
    ctaLabel: 'Visitar acervo',
  },
];
