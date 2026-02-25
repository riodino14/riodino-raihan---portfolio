

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
  skillsData,
  certificationsData
} from '../constants.ts';
import { EducationItem, SkillCategory, ProjectItem, WorkExperienceItem, AchievementItem, CertificationItem } from '../types.ts';
import CertificationCard from '../components/CertificationCard.tsx';

import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const [currentProjectsPage, setCurrentProjectsPage]: [number, Dispatch<SetStateAction<number>>] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentCertificationsPage, setCurrentCertificationsPage] = useState<number>(1);
  const [selectedCertCategory, setSelectedCertCategory] = useState<string>('All');
  
  const projectsPerPage = 4;
  const certificationsPerPage = 3;
  
  const location = useLocation();
  const didConceptualMount = useRef(false);
  const prevProjectsPageRef = useRef<number | undefined>(undefined);
  const prevCertificationsPageRef = useRef<number | undefined>(undefined);

  // Extract unique categories for projects
  const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category).filter(Boolean))) as string[]];

  // Extract unique categories for certifications
  const certCategories = ['All', ...Array.from(new Set(certificationsData.map(c => c.category).filter(Boolean))) as string[]];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  // Filter certifications based on selected category
  const filteredCertifications = selectedCertCategory === 'All'
    ? certificationsData
    : certificationsData.filter(cert => cert.category === selectedCertCategory);

  useEffect(() => {
    didConceptualMount.current = true;
  }, []);

  // Reset to first page when project category changes
  useEffect(() => {
    setCurrentProjectsPage(1);
  }, [selectedCategory]);

  // Reset to first page when certification category changes
  useEffect(() => {
    setCurrentCertificationsPage(1);
  }, [selectedCertCategory]);

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
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const indexOfLastCert = currentCertificationsPage * certificationsPerPage;
  const indexOfFirstCert = indexOfLastCert - certificationsPerPage;
  const currentCertifications = filteredCertifications.slice(indexOfFirstCert, indexOfLastCert);

  const paginateProjects = (pageNumber: number) => {
    setCurrentProjectsPage(pageNumber);
  };

  const paginateCertifications = (pageNumber: number) => {
    setCurrentCertificationsPage(pageNumber);
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

  useEffect(() => {
    if (didConceptualMount.current && prevCertificationsPageRef.current !== undefined && prevCertificationsPageRef.current !== currentCertificationsPage) {
      const certsSectionElement = document.getElementById('certifications');
      if (certsSectionElement) {
        setTimeout(() => {
          certsSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
    prevCertificationsPageRef.current = currentCertificationsPage;
  }, [currentCertificationsPage]);

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
                {edu.gpa && <p className="text-sm text-slate-600 dark:text-slate-400">GPA: {edu.gpa}</p>}
                {edu.notes && edu.notes.length > 0 && (
                  <ul className="list-disc list-inside mt-2 text-sm text-slate-700 dark:text-slate-300">
                    {edu.notes.map((note, i) => <li key={i}>{note}</li>)}
                  </ul>
                )}
                
                {edu.proofs && edu.proofs.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center">
                      <span className="mr-2 flex items-center"><FaLink /></span> Supporting Documents
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.proofs.map((proof, i) => (
                        <a 
                          key={i}
                          href={proof.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
                        >
                          <span className="mr-1.5 flex items-center"><FaExternalLinkAlt /></span> {proof.label}
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
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                selectedCategory === category
                  ? 'bg-sky-600 text-white shadow-sky-200 dark:shadow-sky-900/20'
                  : 'bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project: ProjectItem) => (
            <ProjectCard 
              key={project.id} 
              {...project}
            />
          ))}
        </div>
        {filteredProjects.length > projectsPerPage && (
          <Pagination
            itemsPerPage={projectsPerPage}
            totalItems={filteredProjects.length}
            paginate={paginateProjects}
            currentPage={currentProjectsPage}
          />
        )}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 italic">No projects found in this category.</p>
          </div>
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

      <Section title="Certifications & Licenses" id="certifications">
        {/* Certification Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {certCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCertCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                selectedCertCategory === category
                  ? 'bg-sky-600 text-white shadow-sky-200 dark:shadow-sky-900/20'
                  : 'bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCertifications.map((cert: CertificationItem) => (
            <CertificationCard 
              key={cert.id} 
              {...cert}
            />
          ))}
        </div>

        {filteredCertifications.length > certificationsPerPage && (
          <Pagination
            itemsPerPage={certificationsPerPage}
            totalItems={filteredCertifications.length}
            paginate={paginateCertifications}
            currentPage={currentCertificationsPage}
          />
        )}

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 italic">No certifications found in this category.</p>
          </div>
        )}
      </Section>

      <Section title="Skills & Competencies" id="skills">
        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg shadow-lg transition-colors duration-300">
          {skillsData.map((category: SkillCategory, index: number) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400 mb-3">{category.categoryName}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200 px-3 py-1.5 text-sm rounded-full shadow">
                    {skill}
                  </span>
                ))}
              </div>
              {category.proofs && category.proofs.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.proofs.map((proof, i) => (
                    <a 
                      key={i}
                      href={proof.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
                    >
                      <span className="mr-1.5 flex items-center"><FaExternalLinkAlt /></span> {proof.label}
                    </a>
                  ))}
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