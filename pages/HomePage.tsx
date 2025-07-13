
import { FaLink, FaExternalLinkAlt } from 'react-icons/fa';

import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero.tsx';
import Section from '../components/Section.tsx';
import OrganizationCard from '../components/OrganizationCard.tsx';
import ProjectCard from '../components/ProjectCard.tsx';
import WorkExperienceCard from '../components/WorkExperienceCard.tsx';
import AchievementCard from '../components/AchievementCard.tsx';
import Pagination from '../components/Pagination.tsx';
import { 
  profileData, 
  educationData, 
  workExperienceData, 
  organizationsData, 
  achievementsData, 
  projectsData, 
  skillsData 
} from '../constants.ts';
import { EducationItem, SkillCategory, ProjectItem, WorkExperienceItem, AchievementItem } from '../types.ts';

const HomePage: React.FC = () => {
  const [currentProjectsPage, setCurrentProjectsPage]: [number, Dispatch<SetStateAction<number>>] = useState<number>(1);
  const projectsPerPage = 5;
  
  const location = useLocation();
  const didConceptualMount = useRef(false);
  const prevProjectsPageRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    didConceptualMount.current = true;
  }, []);

  // Effect for scrolling to a section from a hash link
  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.hash]);

  const indexOfLastProject = currentProjectsPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  const paginateProjects = (pageNumber: number) => {
    setCurrentProjectsPage(pageNumber);
  };

  useEffect(() => {
    if (didConceptualMount.current && prevProjectsPageRef.current !== undefined && prevProjectsPageRef.current !== currentProjectsPage) {
      const projectsSectionElement = document.getElementById('projects');
      if (projectsSectionElement) {
        setTimeout(() => {
          projectsSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
    prevProjectsPageRef.current = currentProjectsPage;
  }, [currentProjectsPage]);

  return (
    <div className="animate-fadeIn">
      <Hero {...profileData} />

      <Section title="Education" id="education">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg transition-colors duration-300">
            <div className="flex flex-col sm:flex-row items-start">
              {edu.imageUrl && <img src={edu.imageUrl} alt={edu.institution} className="w-full sm:w-40 h-auto sm:h-28 object-cover rounded-md mr-0 sm:mr-6 mb-4 sm:mb-0"/>}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400">{edu.institution}</h3>
                <p className="text-md text-slate-700 dark:text-slate-300">{edu.degree}</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">{edu.duration} | {edu.location}</p>
                {edu.gpa && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    GPA: {edu.gpa}
                  </p>
                )}

                {edu.notes && edu.notes.length > 0 && (
                  <ul className="list-disc list-inside mt-2 text-sm text-slate-700 dark:text-slate-300">
                    {edu.notes.map((note, i) => <li key={i}>{note}</li>)}
                  </ul>
                )}

                {edu.proofs && edu.proofs.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-sky-600 dark:text-sky-400 mb-2 flex items-center">
                      <FaLink className="mr-2" /> Supporting Documents
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                      {edu.proofs.map((proof, index) => (
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
              </div>
            </div>
          </div>
        ))}
      </Section>

      <Section title="Work Experience" id="work-experience">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workExperienceData.map((exp: WorkExperienceItem) => (
            <WorkExperienceCard 
              key={exp.id} 
              {...exp}
            />
          ))}
        </div>
      </Section>

      <Section title="Organizations" id="organizations">
         <div className="space-y-8">
          {organizationsData.map((org) => (
            <OrganizationCard key={org.id} {...org} />
          ))}
        </div>
      </Section>

      <Section title="Projects" id="projects">
        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project: ProjectItem) => (
            <ProjectCard 
              key={project.id} 
              {...project}
            />
          ))}
        </div>
        {projectsData.length > projectsPerPage && (
          <Pagination
            itemsPerPage={projectsPerPage}
            totalItems={projectsData.length}
            paginate={paginateProjects}
            currentPage={currentProjectsPage}
          />
        )}
      </Section>
      
      <Section title="Achievements" id="achievements">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((ach: AchievementItem) => (
            <AchievementCard 
              key={ach.id} 
              {...ach}
            />
          ))}
        </div>
      </Section>

      <Section title="Skills & Competencies" id="skills">
  <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg shadow-lg transition-colors duration-300">
    {skillsData.map((category: SkillCategory, index: number) => (
      <div key={index} className="mb-6 last:mb-0">
        <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400 mb-3">{category.categoryName}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {category.skills.map((skill, skillIndex) => (
            <span key={skillIndex} className="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200 px-3 py-1.5 text-sm rounded-full shadow">
              {skill}
            </span>
          ))}
        </div>

        {/* Tombol Proofs */}
        {category.proofs && category.proofs.length > 0 && (
          <div className="mt-2">
            <h4 className="text-md font-semibold text-sky-600 dark:text-sky-400 mb-2 flex items-center">
              <FaLink className="mr-2" /> Supporting Documents
            </h4>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              {category.proofs.map((proof, index) => (
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
      </div>
    ))}
  </div>
</Section>

    </div>
  );
};

export default HomePage;