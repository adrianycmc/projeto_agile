import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  duration: string;
  category: string;
  description: string;
  videoId: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  duration,
  category,
  description,
  videoId
}) => {
  return (
    <div className="card overflow-hidden">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
          {duration}
        </span>
      </div>
      <div className="p-4">
        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mb-2">
          {category}
        </span>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <a 
          href={`/video/${videoId}`} 
          className="btn btn-primary w-full"
        >
          Assistir Agora
        </a>
      </div>
    </div>
  );
};

const VideosPage: React.FC = () => {
  // Dados simulados de vídeos
  const videos = [
    {
      id: '1',
      thumbnail: 'https://img.youtube.com/vi/9TycLR0TqFA/maxresdefault.jpg',
      title: 'Introdução ao Scrum para Iniciantes',
      duration: '12:45',
      category: 'Scrum',
      description: 'Aprenda os conceitos básicos do Scrum e como aplicá-los em seus projetos como estagiário.'
    },
    {
      id: '2',
      thumbnail: 'https://img.youtube.com/vi/iVaFVa7HYj4/maxresdefault.jpg',
      title: 'Kanban na Prática',
      duration: '08:32',
      category: 'Kanban',
      description: 'Um guia prático sobre como implementar Kanban em equipes de desenvolvimento de software.'
    },
    {
      id: '3',
      thumbnail: 'https://img.youtube.com/vi/XfvQWnRgxG0/maxresdefault.jpg',
      title: 'Daily Scrum: Como Fazer Corretamente',
      duration: '05:18',
      category: 'Scrum',
      description: 'Dicas para conduzir reuniões diárias eficientes e produtivas no modelo Scrum.'
    },
    {
      id: '4',
      thumbnail: 'https://img.youtube.com/vi/gy1c4_YixCo/maxresdefault.jpg',
      title: 'Retrospectivas Ágeis',
      duration: '15:22',
      category: 'Scrum',
      description: 'Como conduzir retrospectivas que realmente geram melhorias contínuas para a equipe.'
    },
    {
      id: '5',
      thumbnail: 'https://img.youtube.com/vi/MU4psw3ccUI/maxresdefault.jpg',
      title: 'Jira para Iniciantes',
      duration: '18:05',
      category: 'Ferramentas',
      description: 'Tutorial básico sobre como utilizar o Jira para gerenciamento de projetos ágeis.'
    },
    {
      id: '6',
      thumbnail: 'https://img.youtube.com/vi/1zKQmr4pUQE/maxresdefault.jpg',
      title: 'Histórias de Usuário: Como Escrever',
      duration: '09:47',
      category: 'Product Owner',
      description: 'Aprenda a escrever histórias de usuário eficazes para seu backlog de produto.'
    },
    {
      id: '7',
      thumbnail: 'https://img.youtube.com/vi/502ILHjX9EE/maxresdefault.jpg',
      title: 'Estimativas em Métodos Ágeis',
      duration: '14:33',
      category: 'Scrum',
      description: 'Técnicas para estimar tarefas e histórias em projetos ágeis com precisão.'
    },
    {
      id: '8',
      thumbnail: 'https://img.youtube.com/vi/QbPkcfzi2HI/maxresdefault.jpg',
      title: 'Trello para Gestão Ágil',
      duration: '11:20',
      category: 'Ferramentas',
      description: 'Como configurar e utilizar o Trello para gerenciar projetos com metodologias ágeis.'
    },
    {
      id: '9',
      thumbnail: 'https://img.youtube.com/vi/Z9QbYZh1YXY/maxresdefault.jpg',
      title: 'Comunicação em Times Ágeis',
      duration: '07:55',
      category: 'Soft Skills',
      description: 'Dicas para melhorar a comunicação em equipes que utilizam metodologias ágeis.'
    }
  ];

  // Categorias únicas para filtros
  const categories = Array.from(new Set(videos.map(video => video.category)));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection 
          title="Vídeos Explicativos e Tutoriais"
          subtitle="Aprenda metodologias ágeis através de vídeos didáticos e tutoriais práticos."
          ctaText="Explorar Vídeos"
          ctaLink="#videos-section"
        />

        <section id="videos-section" className="py-16">
          <div className="container-custom">
            {/* Filtros e Busca */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h2 className="text-primary">Biblioteca de Vídeos</h2>
                
                <div className="relative w-full md:w-64">
                  <input 
                    type="text" 
                    placeholder="Buscar vídeos..." 
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

              {/* Categorias */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button className="btn bg-primary text-white hover:bg-opacity-90">
                  Todos
                </button>
                {categories.map((category, index) => (
                  <button 
                    key={index} 
                    className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid de Vídeos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <VideoCard 
                  key={video.id}
                  thumbnail={video.thumbnail}
                  title={video.title}
                  duration={video.duration}
                  category={video.category}
                  description={video.description}
                  videoId={video.id}
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
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">3</button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
                  Próxima
                </button>
              </nav>
            </div>
          </div>
        </section>

        {/* Seção de Vídeos em Destaque */}
        <section className="py-16 bg-gray-100">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Vídeos em Destaque</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Conteúdos selecionados pelos nossos mentores para ajudar você a iniciar sua jornada ágil.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <iframe 
                    className="w-full h-64 lg:h-80"
                    src="https://www.youtube.com/embed/9TycLR0TqFA" 
                    title="Introdução ao Scrum para Iniciantes"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Introdução ao Scrum para Iniciantes</h3>
                  <p className="text-gray-600 mb-4">
                    Este vídeo explica os conceitos fundamentais do Scrum, os papéis na equipe e como implementar esta metodologia em projetos reais.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">
                      <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      12:45
                    </span>
                    <span>
                      <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      2.5k visualizações
                    </span>
                  </div>
                </div>
              </div>

              <div className="card overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <iframe 
                    className="w-full h-64 lg:h-80"
                    src="https://www.youtube.com/embed/iVaFVa7HYj4" 
                    title="Kanban na Prática"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Kanban na Prática</h3>
                  <p className="text-gray-600 mb-4">
                    Aprenda como implementar o sistema Kanban para visualizar o fluxo de trabalho e melhorar a eficiência da sua equipe.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">
                      <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      08:32
                    </span>
                    <span>
                      <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      1.8k visualizações
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="mb-4">Quer contribuir com conteúdo?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Se você tem experiência com metodologias ágeis e deseja compartilhar seu conhecimento, 
              envie seu vídeo para nossa plataforma.
            </p>
            <a href="/enviar-video" className="btn bg-white text-primary hover:bg-opacity-90">
              Enviar Meu Vídeo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;
