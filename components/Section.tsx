import React from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, id, children, className }) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-sky-600 dark:text-sky-400 transition-colors duration-300">{title}</h2>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
};

export default Section;