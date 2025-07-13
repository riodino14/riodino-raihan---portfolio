import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AchievementItem } from '../types.ts';
import { FaArrowLeft, FaAward, FaBookOpen, FaBrain, FaLink, FaExternalLinkAlt } from 'react-icons/fa';

interface AchievementDetailPageProps {
  achievements: AchievementItem[];
}

const AchievementDetailPage: React.FC<AchievementDetailPageProps> = ({ achievements }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const achievement = achievements.find(ach => ach.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!achievement) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-red-500 dark:text-red-400">Achievement not found.</h2>
        <Link to="/" className="mt-4 inline-block bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white px-6 py-2 rounded-md transition-colors">
          Go Back Home
        </Link>
      </div>
    );
  }

  const { title, date, location, imageUrl, detailedInfo, proofs } = achievement;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-lg shadow-2xl animate-fadeIn transition-colors duration-300">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 inline-flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group"
        aria-label="Go back to previous page"
      >
        <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
        Back
      </button>

      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-auto object-contain rounded-lg mb-8 shadow-lg" />
      )}
      
      <h1 className="text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-1">{title}</h1>
      <p className="text-md text-slate-500 dark:text-slate-500 mb-6">{`${date} | ${location}`}</p>
      
      {proofs && proofs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mb-4 flex items-center">
            <FaLink className="mr-3" /> Supporting Documents
          </h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            {proofs.map((proof, index) => (
              <a 
                key={index}
                href={proof.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white text-sm font-medium rounded-md transition-colors shadow-md"
                aria-label={`View document: ${proof.label}`}
              >
                <FaExternalLinkAlt className="mr-2" />
                {proof.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {detailedInfo?.fullDescription && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mb-3 flex items-center">
             <FaAward className="mr-2 text-yellow-500" /> Detailed Description
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">{detailedInfo.fullDescription}</p>
        </div>
      )}

      {detailedInfo?.context && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mb-3 flex items-center">
            <FaBookOpen className="mr-2 text-slate-500 dark:text-slate-400" /> Context & Significance
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">{detailedInfo.context}</p>
        </div>
      )}

      {detailedInfo?.learnings && detailedInfo.learnings.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mb-3 flex items-center">
            <FaBrain className="mr-2 text-green-500" /> Key Learnings
          </h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 pl-4">
            {detailedInfo.learnings.map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>
        </div>
      )}
      
      {detailedInfo?.galleryImages && detailedInfo.galleryImages.length > 0 && (
        <div className="my-8">
          <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {detailedInfo.galleryImages.map((imgSrc, index) => (
              <img 
                key={index} 
                src={imgSrc} 
                alt={`${title} gallery image ${index + 1}`} 
                className="w-full h-48 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementDetailPage;