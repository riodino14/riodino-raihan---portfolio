import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectItem } from '../types.ts';
import { FaArrowRight, FaLink } from 'react-icons/fa';

const ProjectCard: React.FC<ProjectItem> = ({ id, title, description, duration, imageUrl, technologies, proofs, category }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {imageUrl && (
        <div className="relative">
          <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
          {category && (
            <span className="absolute top-4 right-4 bg-sky-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-lg">
              {category}
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-1 text-sky-600 dark:text-sky-400">{title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-500 mb-2">{duration}</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-3 h-20 overflow-hidden text-ellipsis"> 
            {description}
          </p>
          {technologies && technologies.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Technologies:</h4>
              <div className="flex flex-wrap gap-1">
                {technologies.slice(0, 5).map((tech, index) => ( 
                  <span key={index} className="px-2 py-0.5 bg-sky-100 text-sky-700 dark:bg-sky-700 dark:text-sky-200 text-xs rounded-full">{tech}</span>
                ))}
                {technologies.length > 5 && <span className="text-sky-600 dark:text-sky-200 text-xs self-end">...</span>}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
          <Link 
            to={`/project/${id}`} 
            className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white text-sm font-medium rounded-md transition-colors"
            aria-label={`View details for ${title}`}
          >
            View Details <span className="ml-2 flex items-center"><FaArrowRight /></span>
          </Link>
          {proofs && proofs.map((proof, index) => (
            <a
              key={index}
              href={proof.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center px-3 py-1 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white text-xs font-medium rounded-md transition-colors"
              aria-label={`View proof: ${proof.label}`}
            >
              <span className="mr-1.5 flex items-center"><FaLink /></span>
              <span>{proof.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;