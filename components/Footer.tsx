import React from 'react';
import { profileData } from '../constants.ts';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 py-8 text-center border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
        <p className="text-xs mt-1">
          Built with React & Tailwind CSS.
        </p>
         <div className="mt-2 text-xs">
           Contact: <a href={`mailto:${profileData.email}`} className="hover:text-sky-600 dark:hover:text-sky-400">{profileData.email}</a>
           {profileData.linkedin && 
             <> | <a href={`https://linkedin.com/in/riodino-raihan`} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400">LinkedIn</a></>
           }
         </div>
      </div>
    </footer>
  );
};

export default Footer;