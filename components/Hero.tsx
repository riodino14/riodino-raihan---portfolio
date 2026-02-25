import React from 'react';
import { ProfileData } from '../types.ts';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

const Hero: React.FC<ProfileData> = ({ name, title, phone, email, linkedin, personalStatement, profileImageUrl, cvUrl }) => {
  return (
    <section 
      id="hero" 
      className="py-16 md:py-24 bg-white dark:bg-slate-800 rounded-lg shadow-xl mb-12 text-center transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {profileImageUrl && (
          <img 
            src={profileImageUrl} 
            alt={name} 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-sky-500 shadow-lg object-cover object-top"
          />
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-sky-600 dark:text-sky-400">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">{title}</p>
        <p className="text-md md:text-lg max-w-2xl mx-auto text-slate-500 dark:text-slate-400 mb-8">{personalStatement}</p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-8">
          {/* {phone && (
            <a href={`tel:${phone}`} className="flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">
              <span className="mr-2 flex items-center"><FaPhone /></span> {phone}
            </a>
          )} */}
          {email && (
            <a href={`mailto:${email}`} className="flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">
              <span className="mr-2 flex items-center"><FaEnvelope /></span> {email}
            </a>
          )}
          {linkedin && (
            <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">
              <span className="mr-2 flex items-center"><FaLinkedin /></span> LinkedIn
            </a>
          )}
           <a href={`https://github.com/${linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">
              <span className="mr-2 flex items-center"><FaGithub /></span> GitHub
            </a>
        </div>

        {cvUrl && (
          <div className="flex justify-center">
            <a 
              href={cvUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2 flex items-center"><FaFileAlt /></span> View My CV
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;