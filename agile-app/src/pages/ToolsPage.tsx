import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

interface ToolCardProps {
  logo: string;
  name: string;
  description: string;
  features: string[];
  difficulty: 'iniciante' | 'intermediário' | 'avançado';
  link: string;
  category: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  logo,
  name,
  description,
  features,
  difficulty,
  link,
  category
}) => {
  const difficultyColors = {
    'iniciante': 'bg-success text-white',
    'intermediário': 'bg-warning text-white',
    'avançado': 'bg-accent text-white'
  };

  return (
    <div className="card p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
          <img src={logo} alt={`${name} logo`} className="max-w-[80%] max-h-[80%]" />
        </div>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <span className={`text-xs px-2 py-1 rounded ${difficultyColors[difficulty]}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-bold text-sm mb-2">Principais funcionalidades:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-4 h-4 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
          {category}
        </span>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          Acessar Ferramenta
        </a>
      </div>
    </div>
  );
};

const ToolsPage: React.FC = () => {
  // Dados simulados de ferramentas
  const tools = [
    {
      id: '1',
      logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg',
      name: 'Trello',
      description: 'Ferramenta visual de gerenciamento de projetos baseada em quadros Kanban.',
      features: [
        'Quadros Kanban personalizáveis',
        'Checklists e prazos',
        'Integração com outras ferramentas',
        'Versão gratuita disponível'
      ],
      difficulty: 'iniciante' as const,
      link: 'https://trello.com',
      category: 'Gerenciamento de Projetos'
    },
    {
      id: '2',
      logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
      name: 'Jira',
      description: 'Plataforma completa para gerenciamento de projetos ágeis e rastreamento de problemas.',
      features: [
        'Quadros Scrum e Kanban',
        'Relatórios e métricas ágeis',
        'Personalização avançada',
        'Integrações com DevOps'
      ],
      difficulty: 'intermediário' as const,
      link: 'https://www.atlassian.com/software/jira',
      category: 'Gerenciamento de Projetos'
    },
    {
      id: '3',
      logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
      name: 'Slack',
      description: 'Plataforma de comunicação em equipe que organiza conversas em canais.',
      features: [
        'Canais organizados por tópico',
        'Compartilhamento de arquivos',
        'Integrações com outras ferramentas',
        'Chamadas de vídeo'
      ],
      difficulty: 'iniciante' as const,
      link: 'https://slack.com',
      category: 'Comunicação'
    },
    {
      id: '4',
      logo: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg',
      name: 'Notion',
      description: 'Ferramenta all-in-one para notas, documentação, wikis e gerenciamento de tarefas.',
      features: [
        'Documentação colaborativa',
        'Bancos de dados personalizáveis',
        'Templates para metodologias ágeis',
        'Wikis de equipe'
      ],
      difficulty: 'intermediário' as const,
      link: 'https://www.notion.so',
      category: 'Documentação'
    },
    {
      id: '5',
      logo: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg',
      name: 'Figma',
      description: 'Ferramenta de design de interface baseada na web para colaboração em tempo real.',
      features: [
        'Design colaborativo em tempo real',
        'Prototipagem interativa',
        'Bibliotecas de componentes',
        'Versão gratuita disponível'
      ],
      difficulty: 'intermediário' as const,
      link: 'https://www.figma.com',
      category: 'Design'
    },
    {
      id: '6',
      logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
      name: 'GitHub',
      description: 'Plataforma de hospedagem de código com controle de versão Git e recursos colaborativos.',
      features: [
        'Repositórios de código',
        'Issues e Pull Requests',
        'GitHub Actions para CI/CD',
        'Projetos e Kanban boards'
      ],
      difficulty: 'intermediário' as const,
      link: 'https://github.com',
      category: 'Desenvolvimento'
    },
    {
      id: '7',
      logo: 'https://cdn.worldvectorlogo.com/logos/miro-2.svg',
      name: 'Miro',
      description: 'Quadro branco colaborativo online para brainstorming, planejamento e design thinking.',
      features: [
        'Quadros infinitos colaborativos',
        'Templates para cerimônias ágeis',
        'Notas adesivas e diagramas',
        'Integrações com outras ferramentas'
      ],
      difficulty: 'iniciante' as const,
      link: 'https://miro.com',
      category: 'Colaboração'
    },
    {
      id: '8',
      logo: 'https://cdn.worldvectorlogo.com/logos/asana-logo.svg',
      name: 'Asana',
      description: 'Plataforma de gerenciamento de trabalho para equipes organizar, acompanhar e gerenciar projetos.',
      features: [
        'Visualizações de lista, quadro e cronograma',
        'Automações de fluxo de trabalho',
        'Metas e objetivos',
        'Versão gratuita disponível'
      ],
      difficulty: 'iniciante' as const,
      link: 'https://asana.com',
      category: 'Gerenciamento de Projetos'
    },
    {
      id: '9',
      logo: 'https://cdn.worldvectorlogo.com/logos/confluence-1.svg',
      name: 'Confluence',
      description: 'Ferramenta de colaboração em equipe para criar, compartilhar e colaborar em documentos.',
      features: [
        'Espaços de trabalho organizados',
        'Templates para documentação ágil',
        'Integração com Jira',
        'Controle de versão de documentos'
      ],
      difficulty: 'intermediário' as const,
      link: 'https://www.atlassian.com/software/confluence',
      category: 'Documentação'
    }
  ];

  // Categorias únicas para filtros
  // const categories = Array.from(new Set(tools.map(tool => tool.category)));
  
  // Níveis de dificuldade para filtros
  // const difficulties = ['iniciante', 'intermediário', 'avançado'];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection 
          title="Ferramentas Gratuitas"
          subtitle="Conheça as melhores ferramentas para aplicar metodologias ágeis na prática e impulsionar sua carreira."
          ctaText="Explorar Ferramentas"
          ctaLink="#tools-section"
        />

        <section id="tools-section" className="py-16">
          <div className="container-custom">
            {/* Filtros e Busca */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h2 className="text-primary">Ferramentas Recomendadas</h2>
                
                <div className="relative w-full md:w-64">
                  <input 
                    type="text" 
                    placeholder="Buscar ferramentas..." 
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <svg 
                    className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Filtros */}
              {/* <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                  <div className="flex flex-wrap gap-2">
                    <button className="btn bg-primary text-white hover:bg-opacity-90 text-sm">
                      Todas
                    {/* </button>
                    {categories.map((category, index) => (
                      <button 
                        key={index} 
                        className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm"
                      >
                        {category}
                      </button> */}
                    {/* ))}
                  </div>
                </div>
                 */}
                
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dificuldade</label>
                  <div className="flex flex-wrap gap-2">
                    {difficulties.map((difficulty, index) => (
                      <button 
                        key={index} 
                        className={`btn ${difficulty === 'iniciante' ? 'bg-success' : difficulty === 'intermediário' ? 'bg-warning' : 'bg-accent'} text-white hover:bg-opacity-90 text-sm`}
                      >
                        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>    

            {/* Grid de Ferramentas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard 
                  key={tool.id}
                  logo={tool.logo}
                  name={tool.name}
                  description={tool.description}
                  features={tool.features}
                  difficulty={tool.difficulty}
                  link={tool.link}
                  category={tool.category}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
