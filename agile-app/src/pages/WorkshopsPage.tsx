import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  instructor: string;
  description: string;
  type: 'online' | 'presencial';
  capacity: number;
  enrolled: number;
}

const EventCard: React.FC<EventProps> = ({
  id,
  title,
  date,
  time,
  instructor,
  description,
  type,
  capacity,
  enrolled
}) => {
  const typeColors = {
    'online': 'bg-secondary text-white',
    'presencial': 'bg-accent text-white'
  };

  const availableSpots = capacity - enrolled;
  const isAvailable = availableSpots > 0;

  return (
    <div className="card overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className={`inline-block text-xs px-2 py-1 rounded mb-2 ${typeColors[type]}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
            <h3 className="font-bold text-xl">{title}</h3>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-600">{date}</div>
            <div className="text-sm text-gray-500">{time}</div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
          <span className="font-medium">{instructor}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-600">
              {isAvailable ? (
                <span>{availableSpots} vagas disponíveis</span>
              ) : (
                <span className="text-accent">Esgotado</span>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div 
                className="bg-primary rounded-full h-2" 
                style={{ width: `${(enrolled / capacity) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <button 
            className={`btn ${isAvailable ? 'btn-primary' : 'bg-gray-300 cursor-not-allowed'}`}
            disabled={!isAvailable}
          >
            Inscrever-se
          </button>
        </div>
      </div>
    </div>
  );
};

const CalendarView: React.FC<{ events: EventProps[], currentMonth: string }> = ({ events, currentMonth }) => {
  // Dias da semana
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  
  // Simulação de um calendário mensal (5 semanas x 7 dias)
  const calendar = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, null, null, null]
  ];
  
  // Mapear eventos para dias específicos
  const getEventsForDay = (day: number | null) => {
    if (!day) return [];
    return events.filter(event => {
      const eventDay = parseInt(event.date.split('/')[0]);
      return eventDay === day;
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-primary text-white p-4">
        <h3 className="text-xl font-bold">{currentMonth}</h3>
      </div>
      
      <div className="grid grid-cols-7 bg-gray-100">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center py-2 text-sm font-medium">
            {day}
          </div>
        ))}
      </div>
      
      <div className="divide-y">
        {calendar.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 divide-x">
            {week.map((day, dayIndex) => {
              const dayEvents = getEventsForDay(day);
              const hasEvents = dayEvents.length > 0;
              
              return (
                <div 
                  key={dayIndex} 
                  className={`min-h-[80px] p-1 ${!day ? 'bg-gray-50' : ''} ${hasEvents ? 'cursor-pointer hover:bg-gray-50' : ''}`}
                >
                  {day && (
                    <>
                      <div className={`text-right text-sm ${hasEvents ? 'font-bold text-primary' : ''}`}>
                        {day}
                      </div>
                      
                      {hasEvents && (
                        <div className="mt-1">
                          {dayEvents.map((event, eventIndex) => (
                            <div 
                              key={eventIndex} 
                              className={`text-xs p-1 rounded mb-1 truncate ${event.type === 'online' ? 'bg-secondary/20 text-secondary' : 'bg-accent/20 text-accent'}`}
                            >
                              {event.title}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const WorkshopsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  
  // Dados simulados de workshops
  const workshops = [
    {
      id: '1',
      title: 'Introdução ao Scrum para Estagiários',
      date: '10/06/2025',
      time: '19:00 - 21:00',
      instructor: 'Ana Martins',
      description: 'Workshop introdutório sobre os princípios do Scrum e como aplicá-los em projetos reais.',
      type: 'online' as const,
      capacity: 50,
      enrolled: 32
    },
    {
      id: '2',
      title: 'Kanban na Prática',
      date: '15/06/2025',
      time: '14:00 - 16:30',
      instructor: 'Carlos Silva',
      description: 'Aprenda a implementar quadros Kanban eficientes para visualizar e otimizar seu fluxo de trabalho.',
      type: 'presencial' as const,
      capacity: 20,
      enrolled: 18
    },
    {
      id: '3',
      title: 'Histórias de Usuário: Como Escrever e Estimar',
      date: '18/06/2025',
      time: '19:00 - 20:30',
      instructor: 'Mariana Costa',
      description: 'Técnicas para escrever histórias de usuário eficazes e estimar seu esforço de desenvolvimento.',
      type: 'online' as const,
      capacity: 40,
      enrolled: 25
    },
    {
      id: '4',
      title: 'Retrospectivas Ágeis Eficientes',
      date: '22/06/2025',
      time: '10:00 - 12:00',
      instructor: 'Pedro Santos',
      description: 'Como conduzir retrospectivas que realmente geram melhorias contínuas para a equipe.',
      type: 'online' as const,
      capacity: 35,
      enrolled: 20
    },
    {
      id: '5',
      title: 'Métricas Ágeis para Iniciantes',
      date: '25/06/2025',
      time: '19:00 - 21:00',
      instructor: 'Juliana Alves',
      description: 'Entenda as principais métricas utilizadas em projetos ágeis e como interpretá-las.',
      type: 'presencial' as const,
      capacity: 25,
      enrolled: 25
    },
    {
      id: '6',
      title: 'Jira para Estagiários',
      date: '29/06/2025',
      time: '14:00 - 16:00',
      instructor: 'Rafael Mendes',
      description: 'Tutorial prático sobre como utilizar o Jira para gerenciamento de projetos ágeis.',
      type: 'online' as const,
      capacity: 60,
      enrolled: 42
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection 
          title="Agenda de Workshops"
          subtitle="Participe de workshops online e presenciais para aprimorar suas habilidades em metodologias ágeis."
          ctaText="Ver Próximos Eventos"
          ctaLink="#workshops-section"
        />

        <section id="workshops-section" className="py-16">
          <div className="container-custom">
            {/* Filtros e Alternância de Visualização */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h2 className="text-primary">Próximos Workshops</h2>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-full md:w-64">
                    <input 
                      type="text" 
                      placeholder="Buscar workshops..." 
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
                  
                  <div className="flex border rounded-lg overflow-hidden">
                    <button 
                      className={`px-4 py-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
                      onClick={() => setViewMode('list')}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </button>
                    <button 
                      className={`px-4 py-2 ${viewMode === 'calendar' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
                      onClick={() => setViewMode('calendar')}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Filtros */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button className="btn bg-primary text-white hover:bg-opacity-90">
                  Todos
                </button>
                <button className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
                  Online
                </button>
                <button className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
                  Presencial
                </button>
                <button className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
                  Com vagas
                </button>
              </div>
            </div>

            {/* Visualização de Lista ou Calendário */}
            {viewMode === 'list' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workshops.map((workshop) => (
                  <EventCard 
                    key={workshop.id}
                    {...workshop}
                  />
                ))}
              </div>
            ) : (
              <CalendarView 
                events={workshops}
                currentMonth="Junho 2025"
              />
            )}
          </div>
        </section>

        {/* Seção de Workshops Gravados */}
        <section className="py-16 bg-gray-100">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">Workshops Gravados</h2>
              <p className="text-lg max-w-3xl mx-auto">
                Não conseguiu participar de um workshop ao vivo? Acesse as gravações dos eventos anteriores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card overflow-hidden">
                <div className="relative">
                  <img src="https://i.ytimg.com/vi/XU0llRltyFM/maxresdefault.jpg" alt="Workshop Scrum" className="w-full h-48 object-cover" />
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                    1:25:30
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Scrum para Times Iniciantes</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Workshop completo sobre implementação do Scrum em equipes que estão começando com metodologias ágeis.
                  </p>
                  <a href="/workshop/scrum-iniciantes" className="btn btn-primary w-full">Assistir Gravação</a>
                </div>
              </div>

              <div className="card overflow-hidden">
                <div className="relative">
                  <img src="https://i.ytimg.com/vi/iVaFVa7HYj4/maxresdefault.jpg" alt="Workshop Kanban" className="w-full h-48 object-cover" />
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                    58:42
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Kanban do Zero</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Aprenda a implementar o sistema Kanban para visualizar o fluxo de trabalho e melhorar a eficiência.
                  </p>
                  <a href="/workshop/kanban-zero" className="btn btn-primary w-full">Assistir Gravação</a>
                </div>
              </div>

              <div className="card overflow-hidden">
                <div className="relative">
                  <img src="https://i.ytimg.com/vi/502ILHjX9EE/maxresdefault.jpg" alt="Workshop Estimativas" className="w-full h-48 object-cover" />
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                    1:12:15
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Técnicas de Estimativa Ágil</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Workshop sobre diferentes técnicas de estimativa utilizadas em projetos ágeis.
                  </p>
                  <a href="/workshop/estimativas-ageis" className="btn btn-primary w-full">Assistir Gravação</a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a href="/workshops/gravados" className="btn btn-outline">
                Ver Todos os Workshops Gravados
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="mb-4">Quer ministrar um workshop?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Se você tem experiência com metodologias ágeis e deseja compartilhar seu conhecimento,
              candidate-se para ministrar um workshop em nossa plataforma.
            </p>
            <a href="/propor-workshop" className="btn bg-white text-primary hover:bg-opacity-90">
              Propor Workshop
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkshopsPage;
