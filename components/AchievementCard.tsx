import React from 'react';
import { Link } from 'react-router-dom';
import { AchievementItem } from '../types.ts';
import { FaArrowRight, FaLink } from 'react-icons/fa';

const AchievementCard: React.FC<AchievementItem> = ({ id, title, location, date, description, imageUrl, proofs }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      )}
      <div className="p-6 flex flex-col flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-1 text-sky-600 dark:text-sky-400">{title}</h3>
          <p className="text-md text-slate-600 dark:text-slate-400 mb-1">{location}</p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">{date}</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 h-20 overflow-hidden text-ellipsis">{description}</p>
        </div>
        <div className="flex items-center flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
          <Link 
            to={`/achievement/${id}`} 
            className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white text-sm font-medium rounded-md transition-colors"
            aria-label={`View details for ${title}`}
          >
            View Details <FaArrowRight className="ml-2" />
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
              <FaLink className="mr-1.5" />
              <span>{proof.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;