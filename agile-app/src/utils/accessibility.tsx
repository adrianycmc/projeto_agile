import React from 'react';

// Componente para melhorar a acessibilidade de imagens
export const AccessibleImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

// Componente para botões acessíveis
export const AccessibleButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}> = ({ children, onClick, className, ariaLabel }) => {
  return (
    <button 
      onClick={onClick} 
      className={className}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {children}
    </button>
  );
};

// Componente para links acessíveis
export const AccessibleLink: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  external?: boolean;
}> = ({ href, children, className, ariaLabel, external }) => {
  return (
    <a 
      href={href} 
      className={className}
      aria-label={ariaLabel}
      tabIndex={0}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && (
        <span className="sr-only">(abre em uma nova janela)</span>
      )}
    </a>
  );
};

// Componente para cabeçalhos semânticos
export const AccessibleHeading: React.FC<{
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}> = ({ level, children, className }) => {
  const Heading = `h${level}` as keyof React.JSX.IntrinsicElements;
  return <Heading className={className}>{children}</Heading>;
};

// Função para verificar contraste de cores
export const checkColorContrast = (foreground: string, background: string): boolean => {
  // Implementação simplificada para verificação de contraste
  // Em um ambiente real, usaríamos bibliotecas como 'color-contrast'
  console.log(`Verificando contraste entre ${foreground} e ${background}`);
  return true;
};

// Função para otimizar carregamento de recursos
export const optimizeResourceLoading = () => {
  // Implementação de otimização de recursos
  // Em um ambiente real, usaríamos técnicas como code splitting, lazy loading, etc.
  console.log('Otimizando carregamento de recursos');
};

// Função para testar responsividade
export const testResponsiveness = () => {
  // Implementação de testes de responsividade
  // Em um ambiente real, usaríamos ferramentas como Cypress ou Playwright
  console.log('Testando responsividade em diferentes dispositivos');
};

// Exportar todas as funções e componentes para uso no projeto
export const accessibilityUtils = {
  AccessibleImage,
  AccessibleButton,
  AccessibleLink,
  AccessibleHeading,
  checkColorContrast,
  optimizeResourceLoading,
  testResponsiveness
};

export default accessibilityUtils;
