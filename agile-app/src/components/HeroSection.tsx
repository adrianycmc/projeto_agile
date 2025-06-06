import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage
}) => {
  const bgStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : { background: 'linear-gradient(135deg, #4361EE 0%, #3CCFCF 100%)' };

  return (
    <div 
      className="relative min-h-[500px] flex items-center bg-cover bg-center"
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container-custom relative z-10 py-16">
        <div className="max-w-2xl">
          <h1 className="text-white mb-4">{title}</h1>
          <p className="text-white text-lg md:text-xl mb-8 opacity-90">
            {subtitle}
          </p>
          <a 
            href={ctaLink} 
            className="btn bg-accent hover:bg-opacity-90 text-white px-8 py-3 text-lg"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
