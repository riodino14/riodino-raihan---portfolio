import React from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  dateRange?: string;
  description?: string;
  responsibilities?: string[];
  bulletPoints?: string[]; // Generic bullet points if responsibilities isn't fitting
  imageUrl?: string;
  technologies?: string[];
}

const Card: React.FC<CardProps> = ({ title, subtitle, dateRange, description, responsibilities, bulletPoints, imageUrl, technologies }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-sky-600 dark:text-sky-400">{title}</h3>
        {subtitle && <p className="text-md text-slate-600 dark:text-slate-400 mb-1">{subtitle}</p>}
        {dateRange && <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">{dateRange}</p>}
        {description && <p className="text-slate-700 dark:text-slate-300 mb-3 text-sm">{description}</p>}
        {(responsibilities || bulletPoints) && (
          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-sm mb-3">
            {(responsibilities || bulletPoints)?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {technologies && technologies.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-sky-100 text-sky-700 dark:bg-sky-700 dark:text-sky-200 text-xs rounded-full">{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;