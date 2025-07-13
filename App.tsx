

import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import OrganizationDetailPage from './pages/OrganizationDetailPage.tsx';
import ProjectDetailPage from './pages/ProjectDetailPage.tsx';
import WorkExperienceDetailPage from './pages/WorkExperienceDetailPage.tsx';
import AchievementDetailPage from './pages/AchievementDetailPage.tsx';
import { organizationsData, projectsData, workExperienceData, achievementsData } from './constants.ts';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/organization/:id" element={<OrganizationDetailPage organizations={organizationsData} />} />
            <Route path="/project/:id" element={<ProjectDetailPage projects={projectsData} />} />
            <Route path="/experience/:id" element={<WorkExperienceDetailPage experiences={workExperienceData} />} />
            <Route path="/achievement/:id" element={<AchievementDetailPage achievements={achievementsData} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;