import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  link,
  color
}) => {
  const colorClasses: {[key: string]: string} = {
    primary: 'bg-primary hover:bg-primary/90',
    secondary: 'bg-secondary hover:bg-secondary/90',
    accent: 'bg-accent hover:bg-accent/90',
    success: 'bg-success hover:bg-success/90',
    warning: 'bg-warning hover:bg-warning/90',
  };

  return (
    <a 
      href={link}
      className={`card flex flex-col items-center text-center p-6 transition-all duration-300 ${colorClasses[color] || 'bg-primary'} text-white hover:scale-105`}
    >
      <div className="text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </a>
  );
};

export default FeatureCard;
