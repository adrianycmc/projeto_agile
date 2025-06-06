import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="font-montserrat font-bold text-2xl">Agile</span>
              <span className="font-montserrat font-bold text-2xl text-accent">Interns</span>
            </div>
            <p className="text-sm mb-4">
              Capacitando estagiários em metodologias ágeis para o mercado de tecnologia.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/videos" className="hover:text-accent transition-colors">Vídeos</a></li>
              <li><a href="/materiais" className="hover:text-accent transition-colors">Materiais</a></li>
              <li><a href="/ferramentas" className="hover:text-accent transition-colors">Ferramentas</a></li>
              <li><a href="/agenda" className="hover:text-accent transition-colors">Agenda</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Agile Interns Hub.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
