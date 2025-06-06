import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const MaterialsPage: React.FC = () => {
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
          <div className="container-custom flex flex-col items-center justify-center min-h-[300px]">
            <svg className="w-20 h-20 text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 48 48">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20v-6a8 8 0 018-8h8a8 8 0 018 8v6M6 20h36v18a4 4 0 01-4 4H10a4 4 0 01-4-4V20z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 32h12" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Em construção</h2>
            <p className="text-gray-500 text-center max-w-md">
              A área de materiais e exercícios está sendo preparada para você! Em breve, disponibilizaremos conteúdos exclusivos para aprofundar seus conhecimentos em metodologias ágeis.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default MaterialsPage;