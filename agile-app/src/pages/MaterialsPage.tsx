import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

interface MaterialCardProps {
  icon: React.ReactNode;
  title: string;
  type: string;
  description: string;
  downloadUrl: string;
  previewUrl: string;
}

const MaterialCard: React.FC<MaterialCardProps> = ({
  icon,
  title,
  type,
  description,
  downloadUrl,
  previewUrl
}) => {
  return (
    <div className="card p-6">
      <div className="flex items-start">
        <div className="text-primary text-3xl mr-4">
          {icon}
        </div>
        <div>
          <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mb-2">
            {type}
          </span>
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            <a 
              href={downloadUrl} 
              className="btn btn-primary text-sm px-3 py-1"
            >
              <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
            <a 
              href={previewUrl} 
              className="btn btn-outline text-sm px-3 py-1"
            >
              <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Visualizar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MaterialsPage: React.FC = () => {
  // Dados simulados de materiais
  const materials = [
    {
      id: '1',
      title: 'Guia Completo de Scrum para Iniciantes',
      type: 'PDF',
      description: 'Um guia detalhado sobre os princípios, papéis e cerimônias do Scrum para quem está começando.',
      downloadUrl: '/downloads/guia-scrum-iniciantes.pdf',
      previewUrl: '/preview/guia-scrum-iniciantes'
    },
    {
      id: '2',
      title: 'Templates de Histórias de Usuário',
      type: 'DOCX',
      description: 'Templates prontos para criar histórias de usuário eficazes para seu backlog de produto.',
      downloadUrl: '/downloads/templates-historias-usuario.docx',
      previewUrl: '/preview/templates-historias-usuario'
    },
    {
      id: '3',
      title: 'Infográfico: Fluxo Kanban',
      type: 'PNG',
      description: 'Infográfico visual explicando o fluxo de trabalho Kanban e suas principais características.',
      downloadUrl: '/downloads/infografico-kanban.png',
      previewUrl: '/preview/infografico-kanban'
    },
    {
      id: '4',
      title: 'Apresentação: Metodologias Ágeis vs. Tradicionais',
      type: 'PPTX',
      description: 'Slides comparando metodologias ágeis e tradicionais, com prós e contras de cada abordagem.',
      downloadUrl: '/downloads/agil-vs-tradicional.pptx',
      previewUrl: '/preview/agil-vs-tradicional'
    },
    {
      id: '5',
      title: 'Checklist para Daily Scrum',
      type: 'PDF',
      description: 'Lista de verificação para garantir reuniões diárias eficientes e produtivas.',
      downloadUrl: '/downloads/checklist-daily-scrum.pdf',
      previewUrl: '/preview/checklist-daily-scrum'
    },
    {
      id: '6',
      title: 'Planilha de Métricas Ágeis',
      type: 'XLSX',
      description: 'Planilha para acompanhar e calcular métricas importantes em projetos ágeis.',
      downloadUrl: '/downloads/metricas-ageis.xlsx',
      previewUrl: '/preview/metricas-ageis'
    },
    {
      id: '7',
      title: 'Guia de Retrospectivas',
      type: 'PDF',
      description: 'Técnicas e dinâmicas para conduzir retrospectivas eficazes com sua equipe.',
      downloadUrl: '/downloads/guia-retrospectivas.pdf',
      previewUrl: '/preview/guia-retrospectivas'
    },
    {
      id: '8',
      title: 'Modelo de Canvas para MVP',
      type: 'PDF',
      description: 'Template de canvas para planejar e validar seu Produto Mínimo Viável (MVP).',
      downloadUrl: '/downloads/canvas-mvp.pdf',
      previewUrl: '/preview/canvas-mvp'
    }
  ];

  // Tipos únicos para filtros
  const types = Array.from(new Set(materials.map(material => material.type)));

  // Ícones para cada tipo de arquivo
  const getIconForType = (type: string) => {
    switch(type) {
      case 'PDF':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'DOCX':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      case 'PPTX':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
          </svg>
        );
      case 'XLSX':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
          </svg>
        );
      case 'PNG':
      default:
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection 
          title="Materiais e Exercícios"
          subtitle="Acesse PDFs, slides, infográficos e exercícios práticos para aprofundar seus conhecimentos em metodologias ágeis."
          ctaText="Explorar Materiais"
          ctaLink="#materials-section"
        />

        <section id="materials-section" className="py-16">
          <div className="container-custom">
            {/* Filtros e Busca */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h2 className="text-primary">Biblioteca de Materiais</h2>
                
                <div className="relative w-full md:w-64">
                  <input 
                    type="text" 
                    placeholder="Buscar materiais..." 
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

              {/* Tipos de Arquivo */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button className="btn bg-primary text-white hover:bg-opacity-90">
                  Todos
                </button>
                {types.map((type, index) => (
                  <button 
                    key={index} 
                    className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Materiais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materials.map((material) => (
                <MaterialCard 
                  key={material.id}
                  icon={getIconForType(material.type)}
                  title={material.title}
                  type={material.type}
                  description={material.description}
                  downloadUrl={material.downloadUrl}
                  previewUrl={material.previewUrl}
                />
              ))}
            </div>

            {/* Paginação */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
                  Anterior
                </button>
                <button className="px-3 py-1 rounded bg-primary text-white">1</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">2</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
                  Próxima
                </button>
              </nav>
            </div>
          </div>
        </section>

        {/* Seção de Exercícios Interativos */}
        <section className="py-16 bg-gray-100">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Exercícios Interativos</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Teste seus conhecimentos com nossos quizzes e exercícios práticos sobre metodologias ágeis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card p-6 border-l-4 border-primary">
                <h3 className="font-bold text-lg mb-2">Quiz: Fundamentos do Scrum</h3>
                <p className="text-gray-600 mb-4">10 perguntas para testar seu conhecimento sobre os princípios básicos do Scrum.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Tempo estimado: 5 min</span>
                  <a href="/quiz/scrum-fundamentos" className="btn btn-primary">Iniciar Quiz</a>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-secondary">
                <h3 className="font-bold text-lg mb-2">Exercício: Criando um Backlog</h3>
                <p className="text-gray-600 mb-4">Aprenda a criar e priorizar um backlog de produto eficiente para seu projeto.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Tempo estimado: 15 min</span>
                  <a href="/exercicio/criando-backlog" className="btn btn-primary">Iniciar Exercício</a>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-accent">
                <h3 className="font-bold text-lg mb-2">Simulação: Sprint Planning</h3>
                <p className="text-gray-600 mb-4">Simulação interativa de uma reunião de planejamento de sprint com cenários reais.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Tempo estimado: 20 min</span>
                  <a href="/simulacao/sprint-planning" className="btn btn-primary">Iniciar Simulação</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="mb-4">Quer sugerir novos materiais?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Se você tem materiais interessantes sobre metodologias ágeis e deseja compartilhar com outros estagiários,
              envie sua sugestão para nossa equipe.
            </p>
            <a href="/sugerir-material" className="btn bg-white text-primary hover:bg-opacity-90">
              Sugerir Material
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MaterialsPage;
