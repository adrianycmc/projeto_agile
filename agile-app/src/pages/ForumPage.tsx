import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

interface ForumPostProps {
  id: string;
  title: string;
  author: string;
  authorRole: 'estagiário' | 'mentor';
  date: string;
  content: string;
  tags: string[];
  upvotes: number;
  replies: number;
  isAnswered: boolean;
}

const ForumPostCard: React.FC<ForumPostProps> = ({
  id,
  title,
  author,
  authorRole,
  date,
  content,
  tags,
  upvotes,
  replies,
  isAnswered
}) => {
  const [voted, setVoted] = useState(false);
  const [currentUpvotes, setCurrentUpvotes] = useState(upvotes);

  const handleUpvote = () => {
    if (!voted) {
      setCurrentUpvotes(prev => prev + 1);
      setVoted(true);
    } else {
      setCurrentUpvotes(prev => prev - 1);
      setVoted(false);
    }
  };

  return (
    <div className="card p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-xl">
          <a href={`/forum/post/${id}`} className="hover:text-primary transition-colors">
            {title}
          </a>
        </h3>
        {isAnswered && (
          <span className="bg-success text-white text-xs px-2 py-1 rounded">
            Respondido
          </span>
        )}
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{content}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
          <div>
            <div className="font-medium text-sm">{author}</div>
            <div className="text-xs text-gray-500">
              {authorRole === 'mentor' ? (
                <span className="text-primary">Mentor</span>
              ) : (
                'Estagiário'
              )}
              <span className="mx-1">•</span>
              {date}
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            className={`flex items-center space-x-1 ${voted ? 'text-primary' : 'text-gray-500'} hover:text-primary transition-colors`}
            onClick={handleUpvote}
          >
            <svg className="w-5 h-5" fill={voted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
            <span>{currentUpvotes}</span>
          </button>
          
          <a 
            href={`/forum/post/${id}`} 
            className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{replies}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ForumPage: React.FC = () => {
  // Dados simulados de posts do fórum
  const forumPosts = [
    {
      id: '1',
      title: 'Como implementar Daily Scrum em equipes remotas?',
      author: 'Ana Silva',
      authorRole: 'estagiário' as const,
      date: '2 dias atrás',
      content: 'Estou estagiando em uma empresa com equipe totalmente remota e estamos tendo dificuldades para realizar as Daily Scrums de forma eficiente. Alguém tem dicas de ferramentas ou práticas que possam ajudar?',
      tags: ['scrum', 'trabalho-remoto', 'daily'],
      upvotes: 15,
      replies: 8,
      isAnswered: true
    },
    {
      id: '2',
      title: 'Diferenças entre Kanban e Scrum para iniciantes',
      author: 'Pedro Santos',
      authorRole: 'estagiário' as const,
      date: '5 dias atrás',
      content: 'Estou começando a estudar metodologias ágeis e fiquei confuso sobre quando usar Kanban e quando usar Scrum. Quais são as principais diferenças e em quais contextos cada um é mais adequado?',
      tags: ['kanban', 'scrum', 'comparação'],
      upvotes: 23,
      replies: 12,
      isAnswered: true
    },
    {
      id: '3',
      title: 'Ferramentas gratuitas para gerenciar backlog',
      author: 'Mariana Costa',
      authorRole: 'estagiário' as const,
      date: '1 semana atrás',
      content: 'Preciso gerenciar o backlog de um projeto pequeno, mas não temos orçamento para ferramentas pagas. Quais são as melhores opções gratuitas disponíveis?',
      tags: ['ferramentas', 'backlog', 'gratuito'],
      upvotes: 18,
      replies: 10,
      isAnswered: true
    },
    {
      id: '4',
      title: 'Como estimar histórias de usuário sem experiência prévia?',
      author: 'Lucas Oliveira',
      authorRole: 'estagiário' as const,
      date: '3 dias atrás',
      content: 'Sou novo na equipe e estou participando das sessões de planning poker, mas não tenho experiência suficiente para estimar com precisão. Como posso contribuir de forma efetiva sem atrapalhar o processo?',
      tags: ['estimativas', 'planning-poker', 'histórias'],
      upvotes: 12,
      replies: 6,
      isAnswered: false
    },
    {
      id: '5',
      title: 'Dicas para primeira apresentação de Sprint Review',
      author: 'Juliana Alves',
      authorRole: 'estagiário' as const,
      date: '4 dias atrás',
      content: 'Vou apresentar pela primeira vez em uma Sprint Review na próxima semana e estou nervoso. Alguém tem dicas de como estruturar a apresentação e o que evitar?',
      tags: ['sprint-review', 'apresentação', 'dicas'],
      upvotes: 9,
      replies: 7,
      isAnswered: true
    },
    {
      id: '6',
      title: 'Métricas ágeis para estagiários acompanharem',
      author: 'Carlos Mendes',
      authorRole: 'mentor' as const,
      date: '1 semana atrás',
      content: 'Como mentor de estagiários em times ágeis, gostaria de compartilhar algumas métricas importantes que vocês devem conhecer e acompanhar para entender melhor o desempenho da equipe.',
      tags: ['métricas', 'desempenho', 'dicas-mentor'],
      upvotes: 31,
      replies: 15,
      isAnswered: true
    },
    {
      id: '7',
      title: 'Conflitos entre membros da equipe durante retrospectivas',
      author: 'Fernanda Lima',
      authorRole: 'estagiário' as const,
      date: '2 dias atrás',
      content: 'Em nossa última retrospectiva, houve um conflito entre membros da equipe que deixou o ambiente tenso. Como lidar com situações assim sendo estagiário?',
      tags: ['retrospectiva', 'conflitos', 'comunicação'],
      upvotes: 14,
      replies: 9,
      isAnswered: false
    },
    {
      id: '8',
      title: 'Transição de metodologia tradicional para ágil',
      author: 'Roberto Almeida',
      authorRole: 'mentor' as const,
      date: '3 dias atrás',
      content: 'Muitos estagiários chegam de cursos que ainda ensinam metodologias tradicionais. Vou compartilhar algumas dicas para facilitar essa transição para o mundo ágil.',
      tags: ['transição', 'waterfall', 'adaptação'],
      upvotes: 27,
      replies: 14,
      isAnswered: true
    }
  ];

  // Tags únicas para filtros
  const tags = Array.from(new Set(forumPosts.flatMap(post => post.tags)));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection 
          title="Fórum de Dúvidas e Feedbacks"
          subtitle="Tire suas dúvidas, compartilhe experiências e interaja com outros estagiários e mentores experientes."
          ctaText="Fazer uma Pergunta"
          ctaLink="#new-question"
        />

        <section className="py-16">
          <div className="container-custom">
            {/* Filtros e Busca */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h2 className="text-primary">Discussões Recentes</h2>
                
                <div className="relative w-full md:w-64">
                  <input 
                    type="text" 
                    placeholder="Buscar no fórum..." 
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
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <div className="flex flex-wrap gap-2">
                    <button className="btn bg-primary text-white hover:bg-opacity-90 text-sm">
                      Todos
                    </button>
                    <button className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm">
                      Respondidos
                    </button>
                    <button className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm">
                      Não Respondidos
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ordenar por</label>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Mais Recentes</option>
                    <option>Mais Populares</option>
                    <option>Mais Comentados</option>
                  </select>
                </div>
              </div>

              {/* Tags Populares */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags Populares</label>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 8).map((tag, index) => (
                    <button 
                      key={index} 
                      className="bg-gray-200 text-gray-700 hover:bg-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </button>
                  ))}
                  <button className="text-primary text-xs hover:underline">
                    Ver todas as tags
                  </button>
                </div>
              </div>
            </div>

            {/* Nova Pergunta */}
            <div id="new-question" className="card p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">Faça uma Nova Pergunta</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                  <input 
                    type="text" 
                    placeholder="Digite um título claro e objetivo" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Conteúdo</label>
                  <textarea 
                    rows={4}
                    placeholder="Descreva sua dúvida com detalhes" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                  <input 
                    type="text" 
                    placeholder="Adicione tags separadas por vírgula (ex: scrum, kanban)" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="btn btn-primary">
                    Publicar Pergunta
                  </button>
                </div>
              </div>
            </div>

            {/* Lista de Posts */}
            <div className="space-y-6">
              {forumPosts.map((post) => (
                <ForumPostCard 
                  key={post.id}
                  {...post}
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

        {/* Seção de Mentores */}
        <section className="py-16 bg-gray-100">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Nossos Mentores</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Conheça os profissionais experientes que estão disponíveis para responder suas dúvidas e orientar sua jornada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">Carlos Mendes</h3>
                <p className="text-primary font-medium mb-2">Scrum Master</p>
                <p className="text-gray-600 text-sm mb-4">
                  Mais de 8 anos de experiência com metodologias ágeis em empresas de tecnologia.
                </p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">Mariana Torres</h3>
                <p className="text-primary font-medium mb-2">Product Owner</p>
                <p className="text-gray-600 text-sm mb-4">
                  Especialista em Product Discovery e gestão de backlog em startups de tecnologia.
                </p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">Roberto Almeida</h3>
                <p className="text-primary font-medium mb-2">Agile Coach</p>
                <p className="text-gray-600 text-sm mb-4">
                  Consultor de transformação ágil com experiência em grandes empresas do mercado.
                </p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="card p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">Juliana Ferreira</h3>
                <p className="text-primary font-medium mb-2">Tech Lead</p>
                <p className="text-gray-600 text-sm mb-4">
                  Desenvolvedora com experiência em times ágeis e integração de práticas DevOps.
                </p>
                <div className="flex justify-center space-x-2">
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="mb-4">Regras da Comunidade</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Nossa comunidade é um espaço de aprendizado e colaboração. Respeite os outros participantes,
              compartilhe conhecimento e faça perguntas claras e objetivas.
            </p>
            <a href="/regras-comunidade" className="btn bg-white text-primary hover:bg-opacity-90">
              Ver Regras Completas
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForumPage;
