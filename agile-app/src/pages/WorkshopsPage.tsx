import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { Calendar, Clock, Users } from 'lucide-react';
import WorkshopForm from '../components/WorkshopForm';

const WorkshopsPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);

  const workshops = [
    {
      id: 1,
      title: "Primeiros Passos com Scrum: Entendendo o Básico das Metodologias Ágeis",
      date: "28/04/2025",
      time: "19:00 - 21:00",
      spots: 20
    },
    {
      id: 2,
      title: "Kanban na Prática: Organização Visual para Iniciantes",
      date: "12/05/2025",
      time: "19:00 - 21:00",
      spots: 20
    },
    {
      id: 3,
      title: "Como Ser Ágil no Dia a Dia: Ferramentas e Dicas para Novos Profissionais",
      date: "26/05/2025",
      time: "19:00 - 21:00",
      spots: 20
    }
  ];

  const handleWorkshopClick = (workshopTitle: string) => {
    setSelectedWorkshop(workshopTitle);
    setShowForm(true);
    setTimeout(() => {
      const formElement = document.getElementById('workshop-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection 
          title="Workshops Online"
          subtitle="Participe dos nossos workshops gratuitos e aprenda na prática com especialistas."
          ctaText="Ver Agenda"
          ctaLink="#workshops-section"
        />

        <section id="workshops-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Agenda de Workshops
              </h2>
              <p className="text-lg text-gray-600">
                Participe dos nossos workshops online via Google Meet e obtenha informações importantes para a sua carreira.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {workshops.map((workshop) => (
                <div key={workshop.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{workshop.title}</h3>
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{workshop.date}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{workshop.time}</span>
                    </div>
                    <div className="flex items-center mb-5">
                      <Users className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">Vagas: {workshop.spots}</span>
                    </div>
                    <button 
                      onClick={() => handleWorkshopClick(workshop.title)}
                      className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={`Inscrever-se no workshop ${workshop.title}`}
                    >
                      Inscrever-se
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {showForm && (
              <div id="workshop-form" className="mt-12 max-w-2xl mx-auto">
                <div className="bg-blue-50 p-4 rounded-lg mb-6 text-center">
                  <p className="font-medium text-blue-800">
                    Você está se inscrevendo para: <span className="font-bold">{selectedWorkshop}</span>
                  </p>
                </div>
                <WorkshopForm />
              </div>
            )}

            <div className="mt-12 max-w-2xl mx-auto bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Informações importantes:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Todos os workshops serão realizados via Google Meet</li>
                <li>• O link de acesso será enviado por e-mail após a inscrição</li>
                <li>• As vagas são limitadas e preenchidas por ordem de inscrição</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkshopsPage;