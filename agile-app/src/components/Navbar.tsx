import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-primary font-montserrat font-bold text-2xl">Agile</span>
              <span className="text-accent font-montserrat font-bold text-2xl">Interns</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-medium hover:text-primary transition-colors">Home</a>
            <a href="/videos" className="font-medium hover:text-primary transition-colors">Vídeos</a>
            <a href="/materiais" className="font-medium hover:text-primary transition-colors">Materiais</a>
            <a href="/ferramentas" className="font-medium hover:text-primary transition-colors">Ferramentas</a>
            <a href="/agenda" className="font-medium hover:text-primary transition-colors">Agenda</a>
          </div>

          {/* Search and Login Button (Desktop)
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
            {/* <button className="btn btn-primary">Login</button> */}
          {/* </div>  */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a href="/" className="font-medium hover:text-primary transition-colors px-2 py-1">Home</a>
              <a href="/videos" className="font-medium hover:text-primary transition-colors px-2 py-1">Vídeos</a>
              <a href="/materiais" className="font-medium hover:text-primary transition-colors px-2 py-1">Materiais</a>
              <a href="/ferramentas" className="font-medium hover:text-primary transition-colors px-2 py-1">Ferramentas</a>
              <a href="/agenda" className="font-medium hover:text-primary transition-colors px-2 py-1">Agenda</a>
              <a href="/forum" className="font-medium hover:text-primary transition-colors px-2 py-1">Fórum</a>
            </div>
            <div className="mt-4 flex flex-col space-y-3">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar..." 
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
              <button className="btn btn-primary w-full">Login</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
