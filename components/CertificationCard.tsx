import React from 'react';
import { CertificationItem } from '../types.ts';
import { FaCertificate, FaExternalLinkAlt, FaIdCard } from 'react-icons/fa';

const CertificationCard: React.FC<CertificationItem> = ({ title, issuer, issueDate, expiryDate, credentialId, credentialUrl, imageUrl, category }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl border border-slate-100 dark:border-slate-700">
      <div className="relative h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        <div className="absolute top-3 left-3 bg-sky-600 text-white p-2 rounded-full shadow-lg">
          <span className="flex items-center text-sm"><FaCertificate /></span>
        </div>
        {category && (
          <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-sky-600 dark:text-sky-400 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 leading-tight">{title}</h3>
        <p className="text-sky-600 dark:text-sky-400 font-medium text-sm mb-3">{issuer}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold mr-2">Issued:</span>
            <span>{issueDate} {expiryDate ? ` - ${expiryDate}` : ''}</span>
          </div>
          
          {credentialId && (
            <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
              <span className="mr-2 flex items-center text-slate-400"><FaIdCard /></span>
              <span className="font-semibold mr-1">ID:</span>
              <span className="font-mono">{credentialId}</span>
            </div>
          )}
        </div>
        
        {credentialUrl && (
          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
            <a 
              href={credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
            >
              Verify Credential <span className="ml-2 flex items-center text-xs"><FaExternalLinkAlt /></span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
