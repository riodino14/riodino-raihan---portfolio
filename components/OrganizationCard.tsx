import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationItem } from '../types.ts';
import { FaArrowRight, FaLink } from 'react-icons/fa';

const OrganizationCard: React.FC<OrganizationItem> = ({ id, name, role, duration, summaryPoints, imageUrl, proofs }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {imageUrl && (
        <img src={imageUrl} alt={name} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
      )}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-1 text-sky-600 dark:text-sky-400">{name}</h3>
          <p className="text-md text-slate-700 dark:text-slate-300 mb-1">{role}</p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">{duration}</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-sm mb-4">
            {summaryPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
          <Link 
            to={`/organization/${id}`} 
            className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white text-sm font-medium rounded-md transition-colors"
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

export default OrganizationCard;