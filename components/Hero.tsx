import React from 'react';
import { ProfileData } from '../types.ts';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
const Hero: React.FC<ProfileData> = ({ name, title, phone, email, linkedin, personalStatement, profileImageUrl }) => {
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
        <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-6">
          {/* {phone && (
            <a href={`tel:${phone}`} className="flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">
              <FaPhone className="mr-2" /> {phone}
            </a>
          )} */}
          {email && (
            <a href={`mailto:riodinoraihan@gmail.com`} className="flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">
              <FaEnvelope className="mr-2" /> {email}
            </a>
          )}
          {linkedin && (
            <a href={`https://linkedin.com/in/riodino-raihan`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          )}
           <a href={`https://github.com/riodino14`} target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/16ihYlD7aBHRkS8ZQcPwxiuH1zZ3SPYcG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
            >
              <FaFileAlt className="mr-2" /> View My CV
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;