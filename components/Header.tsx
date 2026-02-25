import React, { useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { FaSun, FaMoon } from 'react-icons/fa';

// NavLink Component
const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  isHomePage: boolean;
  isHomeLink?: boolean; // New prop to identify the "Home" link
  onClick?: () => void; // For closing mobile menu
}> = ({ href, children, isHomePage, isHomeLink = false, onClick }) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) {
      onClick(); // Call passed onClick, e.g., to close mobile menu
    }

    if (isHomeLink) {
      // For the "Home" link, navigate to "/" and scroll to top
      e.preventDefault(); // Prevent default behavior of the <a> tag
      navigate('/');
      // Use setTimeout to ensure scrolling happens after navigation might have updated the view
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    } else if (isHomePage && href.startsWith('#')) {
      // For hash links on the homepage, scroll to element
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For other RouterLinks (not "Home" and not same-page hash links),
    // RouterLink's default behavior will handle navigation.
    // No e.preventDefault() is called for them here.
  };

  // If it's the "Home" link, render as a simple <a> tag to fully control its behavior.
  if (isHomeLink) {
    return (
      <a
        href="/" // Semantic href, but behavior is overridden
        onClick={handleClick}
        className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors"
        role="button" // Indicate it behaves like a button
        tabIndex={0} // Make it focusable
      >
        {children}
      </a>
    );
  }
  
  // For section links on the home page (e.g., #education)
  if (isHomePage && href.startsWith('#')) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        {children}
      </a>
    );
  }

  // For all other links (e.g., navigating to /project/detail, or #section links when not on homepage)
  // These will use RouterLink to navigate.
  // The onClick on RouterLink will still call our handleClick first (which might call the passed onClick for menu).
  return (
    <RouterLink
      to={href}
      onClick={handleClick} 
      className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors"
    >
      {children}
    </RouterLink>
  );
};


// Header Component
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // For the brand link
  const isHomePage = location.pathname === '/';
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#work-experience" },
    { label: "Organizations", href: "#organizations" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certifications", href: "#certifications" },
    { label: "Skills", href: "#skills" },
  ];

  const closeMenu = () => setIsOpen(false);

  const handleBrandClick = () => {
    if (location.pathname === '/') {
      setTimeout(() => { // Ensure smooth scroll even if on home page
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    } else {
      navigate('/'); // Navigate to home
      setTimeout(() => { // Scroll after navigation
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }
  };


  return (
    <nav className="bg-white dark:bg-slate-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <button 
                onClick={handleBrandClick} 
                className="text-sky-600 dark:text-sky-400 font-bold text-xl focus:outline-none whitespace-nowrap"
              >
              Riodino Raihan
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => (
                <NavLink 
                  key={item.label} 
                  href={isHomePage ? item.href : (item.href === "/" ? "/" : `/${item.href}`)}
                  isHomePage={isHomePage}
                  isHomeLink={item.label === "Home"} // Pass isHomeLink for "Home" item
                  // onClick prop is not passed for desktop NavLinks as closeMenu is for mobile
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="ml-6 p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none transition-colors mr-2"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 dark:focus:ring-sky-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <NavLink 
                key={item.label} 
                href={isHomePage ? item.href : (item.href === "/" ? "/" : `/${item.href}`)} 
                isHomePage={isHomePage}
                isHomeLink={item.label === "Home"} // Pass isHomeLink for "Home" item
                onClick={closeMenu} // Pass closeMenu for mobile links
              >
                <span className="block">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;