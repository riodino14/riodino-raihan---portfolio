import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { OrganizationItem } from '../types.ts';
import { FaArrowLeft, FaExternalLinkAlt, FaLink } from 'react-icons/fa';

interface OrganizationDetailPageProps {
  organizations: OrganizationItem[];
}

const OrganizationDetailPage: React.FC<OrganizationDetailPageProps> = ({ organizations }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const organization = organizations.find(org => org.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!organization) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-red-500 dark:text-red-400">Organization not found.</h2>
        <Link to="/" className="mt-4 inline-block bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white px-6 py-2 rounded-md transition-colors">
          Go Back Home
        </Link>
      </div>
    );
  }

  const { name, role, duration, imageUrl, summaryPoints, detailedInfo, proofs } = organization;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-lg shadow-2xl animate-fadeIn transition-colors duration-300">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 inline-flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group"
      >
        <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
        Back to list
      </button>

      {imageUrl && (
        <img src={imageUrl} alt={name} className="w-full object-cover rounded-lg mb-8 shadow-lg" />
      )}
      
      <h1 className="text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">{name}</h1>
      <p className="text-xl text-slate-700 dark:text-slate-300 mb-1">{role}</p>
      <p className="text-md text-slate-500 dark:text-slate-500 mb-6">{duration}</p>

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

      <div className="mb-8 border-b border-slate-200 dark:border-slate-700 pb-6">
        <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mb-3">Summary</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
          {summaryPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {detailedInfo && (
        <>
          {detailedInfo.description && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mb-3">About {name}</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">{detailedInfo.description}</p>
            </div>
          )}

          {(detailedInfo.mission || detailedInfo.vision) && (
             <div className="grid md:grid-cols-2 gap-6 mb-6">
                {detailedInfo.mission && (
                    <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-md">
                        <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400 mb-2">Mission</h3>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">{detailedInfo.mission}</p>
                    </div>
                )}
                {detailedInfo.vision && (
                    <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-md">
                        <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400 mb-2">Vision</h3>
                        <p className="text-slate-700 dark:text-slate-300 text-sm">{detailedInfo.vision}</p>
                    </div>
                )}
            </div>
          )}


          {detailedInfo.keyPrograms && detailedInfo.keyPrograms.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mb-3">Key Programs & Initiatives</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {detailedInfo.keyPrograms.map((program, index) => (
                  <div key={index} className="bg-slate-100 dark:bg-slate-700 p-3 rounded-md shadow">
                    <p className="text-slate-700 dark:text-slate-200">{program}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {detailedInfo.achievements && detailedInfo.achievements.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mb-3">Notable Achievements</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                {detailedInfo.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
          
          {detailedInfo.galleryImages && detailedInfo.galleryImages.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-500 mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {detailedInfo.galleryImages.map((imgSrc, index) => (
                  <img 
                    key={index} 
                    src={imgSrc} 
                    alt={`${name} gallery image ${index + 1}`} 
                    className="w-full h-60 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
      
      <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
        <p className="text-slate-500 dark:text-slate-400">For more official information, visit the organization's channels (if available).</p>
      </div>

    </div>
  );
};

export default OrganizationDetailPage;