import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "O que é Scrum? Guia para Iniciantes",
    description: "Aprenda os conceitos básicos do Scrum e como aplicá-los em seus projetos como estagiário.",
    embedId: "HlmiVz0SqNQ"
  },
  {
    id: 2,
    title: "Kanban na Prática",
    description: "Como funciona Kanban, tipos de Kanban e aplicações em gestão de processos produtivos.",
    embedId: "BoeBUo6p49g"
  },
  {
    id: 3,
    title: "Daily Scrum: Como Fazer Corretamente",
    description: "Dicas para conduzir reuniões diárias eficientes e produtivas no modelo Scrum.",
    embedId: "YMkThxPdc4"
  },
  {
    id: 4,
    title: "Retrospectivas Ágeis",
    description: "Como conduzir retrospectivas que realmente geram melhorias contínuas para a equipe.",
    embedId: "hTkXKn7JcE8"
  },
  {
    id: 5,
    title: "Jira para Iniciantes",
    description: "Primeiros passos sobre como utilizar o Jira.",
    embedId: "8SypligwcBg"
  },
  {
    id: 6,
    title: "Histórias de Usuário: Como Escrever",
    description: "Aprenda a escrever histórias de usuário eficazes para seu backlog de produto.",
    embedId: "pLJ3LxR292w"
  },
  {
    id: 7,
    title: "Como usar o Trello?",
    description: "Tutorial completo sobre como utilizar o Trello para gerenciar projetos ágeis.",
    embedId: "BXNdjuRIx2U"
  },
  {
    id: 8,
    title: "Por que utilizar Metodologias Ágeis?",
    description: "Entenda os benefícios das metodologias ágeis e como elas podem transformar sua forma de trabalhar.",
    embedId: "LIhKbUHqrbU"
  }
];

const VideosPage: React.FC = () => {
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

        <section id="videos-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Biblioteca de Vídeos
              </h2>
              <p className="text-lg text-gray-600">
                Aprenda no seu próprio ritmo com nossos vídeos educativos sobre metodologias ágeis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md flex flex-col">
                  <div className="relative pb-[56.25%] bg-gray-200">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{video.title}</h3>
                    <p className="text-gray-600 flex-1">{video.description}</p>
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.embedId}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Assistir em tela cheia
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="py-16 bg-primary text-white">
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
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;